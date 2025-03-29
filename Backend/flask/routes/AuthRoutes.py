from flask import Blueprint, request, jsonify
from ..controllers.AuthController import register_user, login_user

auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    user, error = register_user(email, password)
    if error:
        return jsonify({'message': error}), 400
    return jsonify({'message': 'User registered successfully'})

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    token, error = login_user(email, password)
    if error:
        return jsonify({'message': error}), 401
    return jsonify({'token': token})