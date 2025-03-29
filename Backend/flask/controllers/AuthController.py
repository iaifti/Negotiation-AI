import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from model.UserModel import find_user_by_email, create_user

def register_user(email, password):
    if find_user_by_email(email):
        return None, 'User already exists'
    hashed_password = generate_password_hash(password)
    user_data = {
        "Email_ID": email,
        "Password_hash": hashed_password,
        "Account_ID": int(datetime.datetime.utcnow().timestamp()),
        "user_ID": int(datetime.datetime.utcnow().timestamp()),
        "user_reports": [],
        "report_ID": int(datetime.datetime.utcnow().timestamp())
    }
    create_user(user_data)
    return user_data, None

def login_user(email, password):
    user = find_user_by_email(email)
    if user and check_password_hash(user['Password_hash'], password):
        token = "TEST" #REPLACE LATER PLEASE
        return token, None
    return None, 'Invalid credentials'