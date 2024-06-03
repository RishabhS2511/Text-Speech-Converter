document.addEventListener("DOMContentLoaded", function () {
  // Text-to-Speech

  let speech = new SpeechSynthesisUtterance();
  let voices = [];
  let voiceSelect = document.getElementById("voiceSelect");
  let textToSpeechButton = document.getElementById("textToSpeechButton");

  window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach(
      (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
    );
  };

  voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
  });

  textToSpeechButton.addEventListener("click", () => {
    speech.text = document.getElementById("textToSpeechInput").value;
    window.speechSynthesis.speak(speech);
  });

  // Speech-to-Text
  let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  let languageSelect = document.getElementById("languageSelect");
  let startButton = document.getElementById("startButton");
  let stopButton = document.getElementById("stopButton");
  let speechToTextInput = document.getElementById("speechToTextInput");

  function populateLanguageList() {
    let languages = [
      { code: "en-US", name: "English (United States)" },
      { code: "en-GB", name: "English (United Kingdom)" },
      { code: "es-ES", name: "Spanish (Spain)" },
      { code: "fr-FR", name: "French (France)" },
      { code: "hi-IN", name: "Hindi (India)" },
      { code: "bn-IN", name: "Bengali (India)" },
      { code: "ta-IN", name: "Tamil (India)" },
      { code: "te-IN", name: "Telugu (India)" },
      { code: "kn-IN", name: "Kannada (India)" },
      { code: "mr-IN", name: "Marathi (India)" },
      { code: "gu-IN", name: "Gujarati (India)" },
      { code: "pa-IN", name: "Punjabi (India)" },
      { code: "ml-IN", name: "Malayalam (India)" },
      { code: "ur-IN", name: "Urdu (India)" },
      { code: "en-IN", name: "Hinglish (India)" },
    ];

    languageSelect.innerHTML = "";
    languages.forEach((lang) => {
      let option = document.createElement("option");
      option.value = lang.code;
      option.textContent = lang.name;
      languageSelect.appendChild(option);
    });
  }

  populateLanguageList();

  startButton.addEventListener("click", () => {
    recognition.lang = languageSelect.value;
    recognition.start();
    startButton.disabled = true;
    stopButton.disabled = false;
  });

  stopButton.addEventListener("click", () => {
    recognition.stop();
    startButton.disabled = false;
    stopButton.disabled = true;
  });

  recognition.onresult = (event) => {
    speechToTextInput.value = event.results[0][0].transcript;
  };

  recognition.onerror = (event) => {
    console.error(event.error);
  };

  recognition.onend = () => {
    startButton.disabled = false;
    stopButton.disabled = true;
  };
});
