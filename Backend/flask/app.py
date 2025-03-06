from flask import Flask, request, jsonify
from model.gpt2 import generate_response  # Import GPT-2 function

app = Flask(__name__)

@app.route("/generate", methods=["POST"])
def generate_text():
    try:
        data = request.get_json()
        prompt = data.get("prompt", "")

        if not prompt:
            return jsonify({"error": "No prompt provided"}), 400

        generated_text = generate_response(prompt)

        return jsonify({"generated_text": generated_text})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
