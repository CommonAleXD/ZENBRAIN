let currentSongIndex = 0; 
let songs = []; 

document.addEventListener("DOMContentLoaded", function () {
    const songList = document.getElementById("song-list");

    fetch("songs.php")
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                songs = data; 
                data.forEach((song, index) => {
                    const li = document.createElement("li");
                    li.textContent = `${song.nombre} - ${song.autor}`;
                    li.dataset.index = index; 
                    li.addEventListener("click", () => playSong(index));
                    songList.appendChild(li);
                });
            } else {
                songList.textContent = "No hay canciones disponibles.";
            }
        })
        .catch((error) => console.error("Error al cargar canciones:", error));
});

function playSong(index) {
    const audioPlayer = document.getElementById("audio-player");
    const audioSource = document.getElementById("audio-source");
    const songImage = document.getElementById("song-image");
    const songList = document.getElementById("song-list");
    const playPauseButton = document.getElementById("play-pause-button");

    const previousSong = songList.querySelector(".highlighted");
    if (previousSong) {
        previousSong.classList.remove("highlighted");
    }

    const currentSong = songList.querySelector(`[data-index='${index}']`);
    if (currentSong) {
        currentSong.classList.add("highlighted");
    }

    const song = songs[index];
    if (!song) return;

    currentSongIndex = index;
    audioSource.src = song.mp3;
    songImage.src = song.imagen;

    audioPlayer.load();
    audioPlayer.play();

    playPauseButton.src = 'images/pause.png';
}

function playPause() {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause-button');
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.src = 'images/pause.png';
    } else {
        audioPlayer.pause();
        playPauseButton.src = 'images/play.png';
    }
}

function nextSong() {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    playSong(nextIndex);
}

function prevSong() {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(prevIndex);
}

function adjustVolume() {
    var audioPlayer = document.getElementById("audio-player");
    var volumeSlider = document.getElementById("volume-slider");
    audioPlayer.volume = volumeSlider.value;
}