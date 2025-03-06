from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch

MODEL_NAME = "gpt2"
model = GPT2LMHeadModel.from_pretrained(MODEL_NAME)
tokenizer = GPT2Tokenizer.from_pretrained(MODEL_NAME)

def generate_response(prompt, max_length=100, temperature=0.9):
    try:
        if not prompt:
            return

        inputs = tokenizer.encode(prompt, return_tensors="pt")

        with torch.no_grad():
            outputs = model.generate(
                inputs, max_length=max_length, do_sample=True, temperature=temperature
            )

        return tokenizer.decode(outputs[0], skip_special_tokens=True)

    except Exception as e:
        return f"Error generating text: {str(e)}"
