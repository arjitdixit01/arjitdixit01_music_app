const music = document.querySelector("audio")
const img = document.querySelector("img")
const play = document.getElementById("play")
const artist = document.getElementById("artist")
const title = document.getElementById("title")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

const songs = [
    {
        name:"Excuses_320(PagalWorld.com.se).mp3",
        title:"LOTUS -Lane",
        artist : "AP Dhillon",
        img:"Excuses_320(PagalWorld.com.se).jpg",
       
    },
    
    {
        name:"Lost You Mashup 2023 - Dip SR(PagalWorld.com.se) (1).mp3",
        title:"Walking Feriri",
        artist : "Arijit Singh",
        img:"Brown Munde.jpg",
       
    },
    {
        name:"Maan Meri Jaan_320(PagalWorld.com.se).mp3",
        title:"Sapphireos",
        artist : "King",
        img:"Maan Meri Jaan_320(PagalWorld.com.se).jpg",
       
    },
]

let isPlaying =false;

// for Play functionality
const playMusic = () => {
    isPlaying = true;
    music.play();
 
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
}

// for Pause functionality

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
 
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
}

play.addEventListener("click", () => {
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }

})

// Now Changing next song


const loadSong = (songs) => {
title.textContent=songs.title;
artist.textContent=songs.artist;
music.src = "music/" + songs.name;
img.src = "images/"+songs.img;
}
songIndex= 0 ;
// loadSong(songs[1]);

const nextSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}



next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);















