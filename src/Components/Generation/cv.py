from flask import Flask, request, send_file
from PIL import Image, ImageDraw, ImageFont
import io

app = Flask(__name__)

@app.route('/generate-cv', methods=['POST'])
def generate_cv():
    # Get form data from the request
    data = request.get_json()
    name = data.get('name')
    skills = data.get('skills')
    experience = data.get('experience')

    # Create a blank image for the CV (you can customize it more)
    img = Image.new('RGB', (600, 800), color='white')
    draw = ImageDraw.Draw(img)

    # Load a font
    try:
        font = ImageFont.truetype("arial.ttf", 20)
    except IOError:
        font = ImageFont.load_default()

    # Add text to the image (CV content)
    draw.text((20, 30), f"Name: {name}", font=font, fill="black")
    draw.text((20, 70), f"Skills: {skills}", font=font, fill="black")
    draw.text((20, 150), f"Experience: {experience}", font=font, fill="black")

    # Save the image to a byte stream
    img_byte_array = io.BytesIO()
    img.save(img_byte_array, format='PNG')
    img_byte_array.seek(0)

    # Send the image back to the frontend
    return send_file(img_byte_array, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
