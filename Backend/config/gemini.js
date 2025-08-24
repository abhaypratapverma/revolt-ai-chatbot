import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const geminiApi = axios.create({
  baseURL: "https://generativelanguage.googleapis.com/v1beta", 
  headers: {
    "Content-Type": "application/json",
    "x-goog-api-key": process.env.GEMINI_API_KEY, 
  },
});

