If you want quick testing (lightweight, free tier friendly)

Google Gemini (flash-live models)

gemini-2.0-flash-live-001 (stable, lower latency)

gemini-2.5-flash-preview (experimental, slightly better quality)
✅ Supports streaming audio in/out
✅ Low latency
⚠️ Some rate limits on free tiers

🔹 If you want production-ready (robust + scaling later)

WebRTC + Gemini/Whisper combo

Use WebRTC for real-time full-duplex transport (browser ↔ server ↔ model).

On backend:

Speech → Text (STT): Gemini / OpenAI Whisper / Vosk

Text → Speech (TTS): Gemini / ElevenLabs / Azure TTS

This gives you true two-way continuous audio streaming.

🔹 Simplest way (minimal infra, just testing)

Use Google’s Realtime API (beta) with Gemini Flash live model.
It already gives you a WebRTC-like connection and keeps duplex audio running.
No need to build signaling or media servers.

👉 My suggestion:

For testing/demo → use Gemini gemini-2.0-flash-live-001 directly.

For production → wrap it in WebRTC for stable full-duplex audio chat with low latency.