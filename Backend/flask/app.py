from flask import Flask, request, jsonify
from flask_cors import CORS
from flask import Flask, redirect
from routes.AuthRoutes import auth_bp
from routes.NavigationRoutes import navigation_bp
from routes.AIRoutes import ai_bp  # Importing AI routes for testing
from model.gpt2 import generate_response  # Import GPT-2 function

app = Flask(__name__)
CORS(app)  #Frontend and backend communication

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

app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(navigation_bp, url_prefix='/navigate')
app.register_blueprint(ai_bp, url_prefix='/ai') #Seperate endpoint for AI testing

if __name__ == "__main__":
    app.run(debug=True)
