const GEMINI_API_KEY = (process.env.GEMINI_API_KEY || "").trim();
const MODEL_NAME = "gemini-3.5-flash";

async function getAiRecommendationsFromGemini(restaurantsList, preferences) {
    if (!GEMINI_API_KEY) {
        throw new Error("Missing GEMINI_API_KEY in environment variables.");
    }

    // 1. 簡化輸入物件，防止 token 浪費與無效結構
    const simplifiedRestaurants = (restaurantsList || []).map(r => ({
        id: r.id,
        name: r.name,
        district: r.district,
        stars: r.stars,
        price: r.price,
        style: r.menus?.[0]?.style || 'Fine Dining'
    }));

    const prompt = `
You are a fine dining recommendation assistant.
Based on the user's survey preferences:
${JSON.stringify(preferences)}

Choose the best matching restaurant from this list:
${JSON.stringify(simplifiedRestaurants)}

Respond ONLY in valid JSON format matching this schema without markdown code blocks:
{
  "recommend_hotel_id": <number (matching restaurant ID)>,
  "nudge_text": "<A concise 1-2 sentence recommendation reason in Traditional Chinese>"
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
        recommend_hotel_id: parsed.recommend_hotel_id || 42,
        nudge_text: parsed.nudge_text || "為您量身挑選的精選米芝蓮餐廳。"
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
            message: "Gemini Handler Ready",
            has_key: Boolean(GEMINI_API_KEY),
            key_preview: GEMINI_API_KEY ? `${GEMINI_API_KEY.substring(0, 6)}...${GEMINI_API_KEY.slice(-4)}` : "None",
            key_length: GEMINI_API_KEY.length,
            model: MODEL_NAME
        });
    }

    if (req.method === "POST") {
        try {
            // 同時兼容前端傳入的 restaurants 或 products 命名
            const { restaurants, products, preferences = {} } = req.body || {};
            const list = restaurants || products || [];

            if (!Array.isArray(list) || list.length < 1) {
                return res.status(400).json({ error: "Restaurant list must contain at least 1 item." });
            }

            const result = await getAiRecommendationsFromGemini(list, preferences);

            // 直接回傳前端 survey.html 期待的欄位格式
            return res.status(200).json({
                recommend_hotel_id: result.recommend_hotel_id,
                nudge_text: result.nudge_text,
                source: "Gemini_API_Live"
            });

        } catch (err) {
            console.error("[Backend Gemini Call Failed]:", err.message);
            return res.status(500).json({
                error: err.message,
                recommend_hotel_id: 42,
                nudge_text: "根據您對星級評級與優質餐飲體驗的偏好，為您推薦精選餐廳。",
                source: "Fallback_Due_To_Error"
            });
        }
    }

    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
};