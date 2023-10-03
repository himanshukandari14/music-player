console.log("welcome");

// array for alll songs
const listOfSongs=[
    {
        title: "One love(HD)",
        artist: "Shubh",
        image: "./images/download (1).jpg",
        audio: "./One Love-(PagalWorld).mp3",
    },
    {
        title: "9:45(HD)",
        artist: "Prabhjeet",
        image: "./images/9.jpg",
        audio: "9 45-(PagalWorld).mp3",
    },
    {
        title: "3:59am",
        artist: "Divine",
        image: "./images/download.jpg",
        audio: "new_320_3 59 AM - Divine.mp3",

    },
    {
        title: "Khatta Flow",
        artist: "Seedhe-Maut,KR$NA",
        image: "images/khata.jpg",
        audio: "Khatta-Flow(PagalWorld.Social).mp3",

    }
]





const previous=document.querySelector('#previous');
const play=document.querySelector('#play');
const pause=document.querySelector('.fa-pause');
const next=document.querySelector('#next');
const song=document.querySelector('#song');

const songdiv=document.querySelectorAll('.songdiv')
const playWindow=document.querySelector('#playwindow')
const title=document.querySelector('.title')
const cover=document.querySelector('#cover')
const songimg=document.querySelectorAll('.songimg')
const backOption=document.querySelector('.fa-arrow-left')
// dyynamicaaly updating song image


song.addEventListener('loadedmetadata',()=>{  //linked range and the song timing
     progress.max= song.duration;
    progress.value=song.currentTime;
})
play.addEventListener('click',()=>{
    console.log('song played');
    if (song.paused) {
        song.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        cover.classList.add('spinner')
        
    }
    else{
        song.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        console.log('song paused');
         cover.classList.remove('spinner')

    }
})
if(song.play()){//updating the range after every 500ms
    setInterval(()=>{
        progress.value= song.currentTime;
    },500)
}

progress.addEventListener('change',()=>{ //seek and play the song 
    song.play();
    song.currentTime=progress.value;
})



// window opening func


for(let i=0; i<songdiv.length;i++){
    songdiv[i].addEventListener('click',()=>{
        song.play()
        console.log("bhai hai sath mai");
        playWindow.style.display="flex"
         play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        if (song.play) {
     cover.classList.add('spinner')
       }
    })
    }
    
let currentSongIndex = 0; // Initialize with the first song in the array

// Function to update the audio source and other details based on the selected song index
function updateSongDetails() {
    const currentSong = listOfSongs[currentSongIndex];
    song.src = currentSong.audio;
    title.innerText = currentSong.artist;
    cover.src=currentSong.image;
    song.play()

    // Update other details (title, artist, image) here
}

// Load the initial song details
updateSongDetails();


// next
next.addEventListener('click',()=>{
     currentSongIndex = (currentSongIndex + 1) % listOfSongs.length; // Increment the index and wrap around if needed
    updateSongDetails()
    console.log("next");
    if (play.classList.contains('fa-play')) {
        song.pause()
    }
    
})
previous.addEventListener('click',()=>{
     currentSongIndex = (currentSongIndex - 1) % listOfSongs.length; // Increment the index and wrap around if needed
    updateSongDetails()
    console.log("next");
    
})
backOption.addEventListener('click',()=>{
    console.log("back");
    playWindow.style.display="none"
    song.pause()
})

