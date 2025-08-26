import os
import tempfile
from django.shortcuts import render
from django.conf import settings
from openai import OpenAI
from pydub import AudioSegment

def home(request):
    
    summary = None

    if request.method == 'POST' and request.FILES.get('file'): 
        uploaded_file = request.FILES['file'] #temporary container 
        file_path = os.path.join(settings.MEDIA_ROOT, uploaded_file.name)

        # Save the uploaded file
        with open(file_path, 'wb+') as destination:
            for chunk in uploaded_file.chunks():
                destination.write(chunk)

        # Extract audio if it's a video
        audio_path = extract_audio_if_needed(file_path)

        # Transcribe and summarize
        summary = process_audio(audio_path)

        # Clean up extracted audio if different from uploaded file
        if audio_path != file_path:
            os.remove(audio_path)

    return render(request, 'summarizer/home.html', {'summary': summary})


def extract_audio_if_needed(file_path):
    """
    Extract audio from video if needed, using pydub.
    """
    video_extensions = ('.mp4', '.mov', '.avi', '.mkv', '.webm')
    _, ext = os.path.splitext(file_path)

    if ext.lower() in video_extensions:
        audio_temp = tempfile.NamedTemporaryFile(delete=False, suffix=".mp3")
        audio_path = audio_temp.name
        audio = AudioSegment.from_file(file_path)
        audio.export(audio_path, format="mp3")
        return audio_path

    return file_path


def process_audio(audio_path):
    """
    Transcribe audio and summarize using OpenAI Whisper + GPT-4.
    """
    client = OpenAI(api_key=settings.OPENAI_API_KEY)

    with open(audio_path, "rb") as audio_file:
        transcript = client.audio.transcriptions.create(
            model="whisper-1", 
            file=audio_file,
            response_format="text"
        )

    #transcript now holds the full spoken content as a string.
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a meeting assistant. Summarize key points in 3 bullet points."},
            {"role": "user", "content": f"Summarize this:\n{transcript}"}
        ]
    )

    return response.choices[0].message.content #returns the generated text
