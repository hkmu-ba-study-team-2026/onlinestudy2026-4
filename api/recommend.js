const GEMINI_API_KEY = (process.env.GEMINI_API_KEY || "").trim();
const MODEL_NAME = "gemini-3.5-flash";

async function getAiRecommendationsFromGemini(restaurantsList, preferences) {
    if (!GEMINI_API_KEY) {
        throw new Error("Missing GEMINI_API_KEY in environment variables.");
    }

    const simplifiedRestaurants = (restaurantsList || []).map(r => ({
        id: r.id,
        name: r.name,
        region: r.region,
        stars: r.stars,
        price: r.price,
        cuisine: r.cuisine || 'Fine Dining',
        ecoAward: r.ecoAward || null
    }));

    const prompt = `
You are a professional Michelin restaurant recommendation assistant.

[MANDATORY CONSTRAINT]:
The recommended restaurant MUST have an eco-friendly award or certification (its "ecoAward" must NOT be null).

[USER PREFERENCES]:
- Target Budget: HK$ ${preferences.budget_tier || 'Any'}
- Desired Region: ${preferences.preferred_region || 'Any'}
- Desired Cuisine: ${preferences.preferred_cuisine || 'Any'}
- Desired Facilities: ${JSON.stringify(preferences.facility_highlights || [])}

[CANDIDATE RESTAURANTS]:
${JSON.stringify(simplifiedRestaurants)}

[TASK]:
1. Filter candidates strictly having an ecoAward (ecoAward != null).
2. Choose the ONE restaurant that best aligns with user preferences.
3. Generate personalized, persuasive 1-2 sentence recommendation reason in THREE languages:
   - "en": English
   - "zh-HK": Traditional Chinese
   - "zh-CN": Simplified Chinese
Naturally weave in its eco-friendly credentials (e.g., Michelin Green Star, organic farm-to-table, sustainable seafood).

Respond ONLY in valid JSON matching this schema:
{
  "recommend_hotel_id": <number (matching restaurant ID)>,
  "nudge_text": {
    "en": "<reason in English>",
    "zh-HK": "<reason in Traditional Chinese>",
    "zh-CN": "<reason in Simplified Chinese>"
  }
}
`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent`;
    const requestBody = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    let response;
    try {
        response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": GEMINI_API_KEY
            },
            body: JSON.stringify(requestBody),
            signal: controller.signal
        });
    } finally {
        clearTimeout(timeoutId);
    }

    const rawResponseText = await response.text();
    if (!response.ok) {
        throw new Error(`Gemini API Error (${response.status}): ${rawResponseText}`);
    }

    const data = JSON.parse(rawResponseText);
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    const cleanJson = content.replace(/^```json\s*/i, "").replace(/```$/, "").trim();
    const parsed = JSON.parse(cleanJson);

    return {
        recommend_hotel_id: parsed.recommend_hotel_id || 46,
        nudge_text: parsed.nudge_text || {
            "en": "Specially curated for you featuring certified sustainable dining.",
            "zh-HK": "為您精心甄選榮獲可持續認證的美饌典範。",
            "zh-CN": "为您精心甄选荣获可持续认证的美馔典范。"
        }
    };
}

module.exports = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

    if (req.method === "OPTIONS") return res.status(200).end();

    if (req.method === "POST") {
        try {
            const { restaurants, preferences = {} } = req.body || {};
            const list = restaurants || [];
            const result = await getAiRecommendationsFromGemini(list, preferences);

            return res.status(200).json({
                recommend_hotel_id: result.recommend_hotel_id,
                nudge_text: result.nudge_text,
                source: "Gemini_Live"
            });
        } catch (err) {
            return res.status(500).json({
                error: err.message,
                recommend_hotel_id: 46,
                nudge_text: {
                    "en": "Specially selected Roganic Hong Kong for you, featuring a Michelin Green Star and sustainable farm-to-table cuisine.",
                    "zh-HK": "為您精選榮獲米芝蓮綠星的 Roganic Hong Kong，堅持新界有機農場直供與可持續微型菜園料理。",
                    "zh-CN": "为您精选荣获米其林绿星的 Roganic Hong Kong，坚持新界本地有机农场直供与可持续微型菜园料理。"
                },
                source: "Fallback"
            });
        }
    }
    return res.status(405).json({ error: "Method Not Allowed" });
};