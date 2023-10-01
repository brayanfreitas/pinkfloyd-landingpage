import songList from "./song-list.js";
document.getElementById('play').addEventListener('click', justPlay);
document.getElementById('next').addEventListener('click', nextSong);
document.getElementById('previous').addEventListener('click', previousSong);
document.getElementById('volume').addEventListener('input', ()=> {
  changeVolume();
});
document.getElementById('song_duration').addEventListener('input', ()=> {
  changeDuration();
});


//obtem as váriaveis necessárias para o reprodutor de música;
let play = document.querySelector('#play');
let title = document.querySelector('#title');
let currentVolume = document.querySelector('#volume');
let showVolume = document.querySelector('#volume_show');
let songDuration = document.querySelector('#song_duration');
let trackImage = document.querySelector('#track_image');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let disk = document.querySelector('#disk');


let songNumber = 0;
let timer;
let playingSong = false;

//criando Elemeto de audio;
let track = document.createElement('audio');


/*
Função usada para carregar a musica.
carrega a musica atual e seus dados 
que estão no no song list;
*/
function loadSong(index){
  let song = songList[index];
  track.src = song.path;
  title.innerHTML = song.name;
  disk.style.background = `url('${song.img}') center / cover`
  track.load();

  total.innerHTML = songList.length;
  present.innerHTML = index + 1;
  timer = setInterval(rangeSlider, 1000)
}

loadSong(songNumber);

//pausa e reproduz a musica;
function justPlay(){
  if(playingSong == false){
    disk.style.animationPlayState = 'running';
    playSong();
  }    
  else {
    disk.style.animationPlayState = 'paused';
    pauseSong();    
  }     
}

//toca a musica;
function playSong() {  
  track.play();
  playingSong = true;
  play.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

//pausa a musica
function pauseSong() {  
  track.pause();
  playingSong = false;
  play.innerHTML = '<i class="fa-solid fa-play"></i>';
}

//proxima musica
function nextSong() { 
  if(songNumber < songList.length -1){
    songNumber += 1;
    resetSlider();
    loadSong(songNumber);
    playSong();
  } else {
    songNumber = 0;
    loadSong(songNumber);
  }
}

//volta para musica anterior
function previousSong() {
  if(songNumber > 0){
    songNumber -= 1;
    resetSlider();
    loadSong(songNumber);
    playSong();
  } else {
    songNumber = songList.length;
    loadSong(songNumber);
    playSong();
  }
}

function changeVolume() {
  showVolume.innerHTML = currentVolume.value;
  track.volume = currentVolume.value/100;
}

//Muda o tempo da musica de acordo com a posição do slider
function changeDuration() {
  
  const sliderPosition = (track.duration * (songDuration.value/100)).toFixed(3);
  track.currentTime = sliderPosition;
}

//Reseta o slider quando muda musica
function resetSlider() {
  songDuration.value = 0; 
}

function rangeSlider() {
  let position = 0;

  /*reseta a posição do slider, pois caso
    mude de musica o valor do track.duration é perdido
  */
  if(!isNaN(track.duration)){
    position = track.currentTime * (100 / track.duration)
    songDuration.value = position;
    if(track.ended){
      play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
      songNumber += 1;
      loadSong(songNumber);
      playSong();
  }
  }
}




