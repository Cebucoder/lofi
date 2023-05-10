const playMusicBtn = document.getElementById("play-music-btn");
let isPlaying = false;
let audio;
let playico = document.getElementById("play");
let muteico = document.getElementById("mute");

playMusicBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    // playMusicBtn.innerHTML = "Play Music";
    playico.classList.remove("toggle-play");
    muteico.classList.remove("toggle-mute");



  } else {
    audio = new Audio("./music/bgmusic.mp3");
    audio.play();
    // playMusicBtn.innerHTML = "Pause Music";
    playico.classList.add("toggle-play");
    muteico.classList.add("toggle-mute");



  }
  isPlaying = !isPlaying;
});
