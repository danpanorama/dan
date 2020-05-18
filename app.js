const btn = document.querySelector('.talk');
const content=document.querySelector('.content')

const SpeechRecognition=
window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
  console.log('voice is activated!');
}
recognition.onresult = function(event){
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript
  readOutLoud(transcript);
}

btn.addEventListener('click', ()=>{
  recognition.start();
})

function readOutLoud(massage){
  const speech = new SpeechSynthesisUtterance();
  speech.text = massage;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch=1;
  window.speechSynthesis.speak(speech);
}
