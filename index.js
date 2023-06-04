const Aaftaab = new Audio('./songs/Aaftaab.mp3');
const WBV = new Audio('./songs/WBV.mp3');
const KaiseyJiyun = new Audio('./songs/Kaisey_Jiyun.mp3');
const DilMere = new Audio('./songs/Dil_Mere.mp3');

// DilMere.play();

const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const PlayPauseIcon = document.querySelector('#play-pause-icon');

const songs = [
    { ele: Aaftaab, audioName:'Aaftaab - Local Train' },
    { ele: WBV, audioName: 'Worlds Best Voilin' },
    { ele: KaiseyJiyun, audioName:'Kaisey Jiyun - Local Train' },
    { ele: DilMere, audioName:'Dil Mera - Local Train' }
];

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;


currentSong.play();
// playBtn.addEventListener('click',()=>{
//     if (currentSong.paused)
//     {
//         currentSong.play();
//         PlayPauseIcon.className = 'ph-fill ph-play-circle';
//     }
//     else
//     {
//         currentSong.pause();
//         PlayPauseIcon.className = 'ph-fill ph-pause-circle';
//     }
// })