import express from "express";
import { sendTextToGemini } from "../services/geminiService.js";

const router = express.Router();

// Health check
router.get("/", (req, res) => {
  res.send("Chat API is working ✅");
});

// Send user text → Gemini
router.post("/text", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const reply = await sendTextToGemini(message);
    res.json({ reply });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
