let currentSongIndex = 0;

const songs = [
    { title: 'Drake - Gods Plan', audioSrc: 'sng/Drake - Gods Plan.mp3', imageSrc: 'images/relax.jpg' },
    { title: 'Future - Life Is Good ft. Drake', audioSrc: 'sng/Future - Life Is Good ft. Drake.mp3', imageSrc: 'img/img2.jpg' },
    { title: 'Travis Scott - goosebumps ft. Kendrick Lamar', audioSrc: 'sng/Travis Scott - goosebumps ft. Kendrick Lamar.mp3', imageSrc: 'img/img3.jpg' },
    { title: 'Juice WRLD - Bandit ft. NBA Youngboy', audioSrc: 'sng/Juice WRLD - Bandit ft. NBA Youngboy.mp3', imageSrc: 'img/img4.png' }
];

function updateSongDetails() {
    const song = songs[currentSongIndex];
    document.getElementById('song-title').textContent = song.title;
    document.getElementById('song-image').src = song.imageSrc;
    const audioSource = document.getElementById('audio-source');
    audioSource.src = song.audioSrc;
    document.getElementById('audio-player').load();
}

function playPause() {
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongDetails();
    playPause();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongDetails();
    playPause();
}

// Inicializa con la primera canción
updateSongDetails();