const video = document.querySelectorAll(".video");

for (let i = 0; i < video.length; i++) {
    video[i].addEventListener("mouseenter", (e)=>
    {
        video[i].play();
    });
    video[i].addEventListener("mouseout", (e)=>
    {
        video[i].pause();
    });
}