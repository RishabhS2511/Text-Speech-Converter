#Text to Speech and Speech to Text Converter

This project is a web-based application that provides two main functionalities: converting text to speech and converting speech to text. The user interface includes a smooth, animated transition between the two functionalities, allowing users to easily switch between them. The application supports multiple languages for both text-to-speech and speech-to-text conversion.

Features

- Text to Speech: Convert any written text to audible speech using available voices.
- Speech to Text: Convert spoken words to written text with support for multiple languages.
- Smooth Animation: Animated transition between the two functionalities.
- Language Support: Support for multiple languages including Indian languages and Hinglish.
- Voice Selection: Allows users to select different voices for text-to-speech conversion.

Technologies Used
- HTML
- CSS
- JavaScript
- Web Speech API (for both SpeechSynthesis and SpeechRecognition)

Usage

Text to Speech

- Enter the text you want to convert to speech.
- Select a voice from the dropdown menu.
- Click the "Text to Speech" button to hear the text.

Speech to Text

- Select the language you will speak in from the dropdown menu.
- Click the "Start" button and begin speaking.
- Click the "Stop" button to end the speech recognition.
- The recognized text will appear in the textarea.

JavaScript Logic

Text to Speech:- The 'SpeechSynthesisUtterance' object is used to convert text to speech.
Speech to Text:- The 'SpeechRecognition' object is used to convert speech to text.
Language Support:- The 'recognition.lang' property is set based on user selection to support multiple languages for speech recognition.
