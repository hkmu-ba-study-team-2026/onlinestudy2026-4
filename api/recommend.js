const GEMINI_API_KEY = (process.env.GEMINI_API_KEY || "").trim();
// 修正為官方標準有效的模型名稱
const MODEL_NAME = "gemini-3.5-flash";

async function getAiRecommendationsFromGemini(restaurantsList, preferences) {
    if (!GEMINI_API_KEY) {
        throw new Error("Missing GEMINI_API_KEY in environment variables.");
    }

    // 1. 簡化輸入物件，並確保將 ecoAward 欄位包含進去供 AI 判讀
    const simplifiedRestaurants = (restaurantsList || []).map(r => ({
        id: r.id,
        name: r.name,
        region: r.region,
        location: r.location,
        stars: r.stars,
        price: r.price,
        cuisine: r.cuisine || r.menus?.[0]?.style || 'Fine Dining',
        ecoAward: r.ecoAward || null // 環保/綠星認證標籤
    }));

    // 2. 針對「必須具備環保認證」修改 Prompt 規則
    const prompt = `
You are a professional fine dining Michelin recommendation assistant.

[MANDATORY CONSTRAINT]:
The recommended restaurant MUST have an eco-friendly certification or award (meaning its "ecoAward" property is NOT null). Never recommend a restaurant without an ecoAward.

[USER PREFERENCES]:
- Target Budget: HK$ ${preferences.budget_tier || 'Any'}
- Desired Accolade / Level: ${preferences.star_tier ? preferences.star_tier + ' Stars' : 'Any'}
- Desired Region: ${preferences.preferred_region || 'Any'}
- Desired Cuisine: ${preferences.preferred_cuisine || 'Any'}
- Desired Facilities / Perks: ${JSON.stringify(preferences.facility_highlights || [])}

[CANDIDATE RESTAURANTS]:
${JSON.stringify(simplifiedRestaurants)}

[TASK]:
1. Filter candidates that strictly possess an "ecoAward" (ecoAward != null).
2. From those eco-certified restaurants, select the ONE restaurant that best aligns with the user's cuisine, region, budget, and star tier preferences.
3. Write a personalized, persuasive 1-2 sentence recommendation reason ("nudge_text") in Simplified Chinese (简体中文). The reason should naturally weave in its eco-friendly credentials (e.g. Michelin Green Star, zero-waste, sustainable sourcing, organic farms) and why it matches the user's tastes.

Respond ONLY in valid JSON matching this schema without markdown code blocks:
{
  "recommend_hotel_id": <number (matching restaurant ID)>
}
`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent`;

    const requestBody = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ],
        generationConfig: {
            responseMimeType: "application/json"
        }
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

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
        console.error("Gemini API Error Detail:", rawResponseText);
        throw new Error(`Google Gemini API Error (${response.status}): ${rawResponseText}`);
    }

    let data;
    try {
        data = JSON.parse(rawResponseText);
    } catch (e) {
        throw new Error(`Failed to parse raw Gemini response: ${rawResponseText}`);
    }

    const content = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!content) {
        throw new Error(`Empty content returned from Gemini API: ${rawResponseText}`);
    }

    const cleanJsonText = content.replace(/^```json\s*/i, "").replace(/```$/, "").trim();
    const parsed = JSON.parse(cleanJsonText);

    return {
        recommend_hotel_id: parsed.recommend_hotel_id || 1,
        nudge_text: parsed.nudge_text || "为您精选荣获环保可持续认证的米其林绿色餐厅。"
    };
}

module.exports = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, x-goog-api-key");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method === "GET") {
        return res.status(200).json({
            status: "ok",
            message: "Gemini Eco-Recommendation Handler Ready",
            has_key: Boolean(GEMINI_API_KEY),
            model: MODEL_NAME
        });
    }

    if (req.method === "POST") {
        try {
            const { restaurants, products, preferences = {} } = req.body || {};
            const list = restaurants || products || [];

            if (!Array.isArray(list) || list.length < 1) {
                return res.status(400).json({ error: "Restaurant list must contain at least 1 item." });
            }

            const result = await getAiRecommendationsFromGemini(list, preferences);

            return res.status(200).json({
                recommend_hotel_id: result.recommend_hotel_id,
                nudge_text: result.nudge_text,
                source: "Gemini_API_Live"
            });

        } catch (err) {
            console.error("[Backend Gemini Call Failed]:", err.message);
            // 本地環保餐廳保底（Fallback 必須是具備 ecoAward 的餐廳，例如 ID 1 Amber 或 ID 6 Caprice）
            return res.status(500).json({
                error: err.message,
                recommend_hotel_id: 1,
                nudge_text: "根据您的用餐偏好，为您特别甄选荣获米其林绿星殊荣的置地文华东方酒店 Amber，践行有机与低碳美馔。",
                source: "Fallback_Due_To_Error"
            });
        }
    }

    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
};