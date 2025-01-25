import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import openai

import ArmTracking

# Load environment variables from .env
load_dotenv()

# Create a new client for openai>=1.0.0
openai_client = openai.Client(api_key=os.getenv("OPENAI_API_KEY"))

app = Flask(__name__)
CORS(app)

def generate_prompt(rom):
    return (
        f"My arm's range of motion is {rom} degrees. "
        "Suggest some exercises or advice to improve my shoulder flexibility and mobility."
    )

def query_llm(prompt):
    try:
        # Using the new client-based API
        response = openai_client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a physiotherapy assistant."},
                {"role": "user", "content": prompt},
            ],
            temperature=0.7,
            max_tokens=150
        )
        # Extract the assistant's reply
        return response.choices[0].message.content
    except Exception as e:
        return f"Error querying LLM: {e}"

@app.route('/get_rom', methods=['GET'])
def get_rom():
    try:
        rom = ArmTracking.track_arm_rom()  # your function to detect ROM
        if rom is not None:
            prompt = generate_prompt(rom)
            llm_response = query_llm(prompt)
            return jsonify({
                "rom": rom,
                "prompt": prompt,
                "llm_response": llm_response
            })
        else:
            return jsonify({"error": "No ROM detected."})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
