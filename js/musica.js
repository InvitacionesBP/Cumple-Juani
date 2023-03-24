let myAudio = document.getElementById("cancion");
let isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};

myAudio.onpause = function() {
  isPlaying = false;
};