from flask import Flask, jsonify
from flask_cors import CORS
import ArmTracking

app = Flask(__name__)
CORS(app)

@app.route('/get_rom', methods=['GET'])
def get_rom():
    try:
        # Call the track_arm_rom function from ArmTracker.py
        rom = ArmTracking.track_arm_rom()
        if rom is not None:
            return jsonify({"rom": rom})
        else:
            return jsonify({"error": "No ROM detected."})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
