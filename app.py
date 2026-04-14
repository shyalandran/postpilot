from flask import Flask, render_template, request, jsonify
from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/generate", methods=["POST"])
def generate():
    data = request.json
    content = data.get("content")
    platform = data.get("platform")

    prompt = f"""
    You are a social media expert.
    Transform the following content into an engaging {platform} post.
    
    Content: {content}
    
    Rules:
    - If LinkedIn: professional tone, 150-200 words, add relevant hashtags
    - If Twitter/X: punchy, under 280 characters, add 2-3 hashtags
    - If Instagram: casual and fun, add 5-10 hashtags at the end
    
    Write only the post, nothing else.
    """

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    post = response.choices[0].message.content
    return jsonify({"post": post})

if __name__ == "__main__":
    app.run(debug=True)