from flask import Blueprint, request, jsonify
from controllers.AIController import get_ai_response

ai_bp = Blueprint('ai_bp', __name__)

@ai_bp.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get('prompt', '')
    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400
    response, error = get_ai_response(prompt)
    if error:
        return jsonify({'error': error}), 500
    return jsonify({'generated_text': response})
