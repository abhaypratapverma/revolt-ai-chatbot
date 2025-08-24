import {geminiApi} from "../config/gemini.js";
//Bussiness logic to interact with Gemini API
export const sendTextToGemini = async (userMessage) => {
  try {
    const response = await geminiApi.post(
      "/models/gemini-2.0-flash:generateContent",
      {
        contents: [
          {
            parts: [{ text: userMessage }],
          },
        ],
      }
    );

    // Return AI’s reply
    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("❌ Gemini API Error:", error.response?.data || error.message);
    throw new Error("Failed to connect with Gemini API");
  }
};
