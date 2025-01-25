from flask import Flask, jsonify
from flask_cors import CORS
import ArmTracking
import openai
import os
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
# Load environment variables from .env file
load_dotenv()

# Load your OpenAI API key from environment variables or replace with your API key
openai_client = openai.Client(api_key=os.getenv("OPENAI_API_KEY"))

app = Flask(__name__)
CORS(app)
uri = os.getenv("MONGODB_CONNECTION_STRING")
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

def generate_prompt(rom):
    """
    Generate a prompt based on the ROM value.
    """
    return f"My arm's range of motion is {rom} degrees. Suggest some exercises or advice to improve my shoulder flexibility and mobility based on my current range of motion."

def query_llm(prompt):
    """
    Query the LLM (GPT) with the given prompt.
    """
    try:
        response = openai_client.chat.completions.create(
            model="gpt-4",  # Use "gpt-4" if available
            messages=[
                {"role": "system", "content": "You are a physiotherapy assistant."},
                {"role": "user", "content": prompt}
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
        # Call the track_arm_rom function from ArmTracker.py
        rom = ArmTracking.track_arm_rom()
        if rom is not None:
            # Generate a prompt and query the LLM
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
