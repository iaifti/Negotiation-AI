from model.gpt2 import generate_response

def get_ai_response(prompt):
    try:
        response = generate_response(prompt)
        return response, None
    except Exception as e:
        return None, str(e)