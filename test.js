// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         console.log(entry)
//         if(entry.isIntersecting){
//             entry.target.classList.add('show');
//         }else{
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el)=>observer.observe(el));
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

const cards = document.querySelectorAll('.card');
cards.forEach((card) => observer.observe(card));




// const video = document.getElementById('background-video');
// let isVideoPlaying = false;
// let lastScrollY = window.scrollY;

// const playVideo = () => {
//     video.play();
//     isVideoPlaying = true;
// };

// const pauseVideo = () => {
//     video.pause();
//     isVideoPlaying = false;
// };

// const handleIntersection = (entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting && !isVideoPlaying) {
//             playVideo();
//         } else if (!entry.isIntersecting && isVideoPlaying) {
//             pauseVideo();
//         }
//     });
// };

// const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
// observer.observe(video);

// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
//     const isInView = scrollY + window.innerHeight > video.offsetTop;

//     if (isInView) {
//         if (scrollY > lastScrollY && !isVideoPlaying) {
//             playVideo();
//             video.playbackRate = 1;
//         } else if (scrollY < lastScrollY && !isVideoPlaying) {
//             playVideo();
//             video.playbackRate = -1;
//         }
//     } else if (!isInView && isVideoPlaying) {
//         pauseVideo();
//     }

//     lastScrollY = scrollY;
// });

