from flask import Flask, request, send_file, render_template
import edge_tts
import asyncio
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

async def generate_voice(text, voice, file):
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(file)

@app.route('/generate', methods=['POST'])
def generate():
    text = request.form['text']
    voice = request.form['voice']

    file_path = "output.mp3"

    asyncio.run(generate_voice(text, voice, file_path))

    return send_file(file_path, as_attachment=True)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
