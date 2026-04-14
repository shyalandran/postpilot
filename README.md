# ✈️ PostPilot — AI Content to Social Media Post Generator

## What it does
PostPilot takes any raw content you provide and uses AI to transform it 
into a polished, platform-specific social media post instantly.

## Platforms Supported
- LinkedIn (professional tone)
- Twitter/X (short and punchy)
- Instagram (casual with hashtags)

## Tech Stack
- Python
- Flask
- Groq API (LLaMA 3.3 70B)
- HTML, CSS, JavaScript

## How to Run
1. Clone the repo
2. Install dependencies
   pip3 install flask groq python-dotenv
3. Create a .env file and add your Groq API key
   GROQ_API_KEY=your-key-here
4. Run the app
   python3 app.py
5. Open http://127.0.0.1:5000

## Demo
Paste any content → Pick a platform → Click Generate → Copy your post!