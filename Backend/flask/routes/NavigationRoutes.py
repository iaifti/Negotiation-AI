from flask import Blueprint, request, jsonify
from controllers.NavigationController import navigate_to_page

navigation_bp = Blueprint('navigation_bp', __name__)

@navigation_bp.route('/', methods=['POST'])
def navigate():
    data = request.get_json()
    page = data.get('page')
    message = navigate_to_page(page)
    return jsonify({'message': message})
