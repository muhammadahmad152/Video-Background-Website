
document.addEventListener("DOMContentLoaded", function () {

    const video = document.querySelector("video");
    const exploreBtn = document.querySelector(".custom-btn");
    const playPauseBtn = document.querySelector(".play-pause-btn");

    const preloader = document.createElement("div");

    preloader.id = "preloader";

    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #101113;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        color: #fff;
        font-family: sans-serif;
        transition: opacity 0.5s ease;
    `;

    preloader.innerHTML = "<h3>Loading...</h3>";

    document.body.prepend(preloader);

    window.addEventListener("load", function () {

        preloader.style.opacity = "0";

        setTimeout(function () {
            preloader.style.display = "none";
        }, 500);

    });

    if (playPauseBtn && video) {

        playPauseBtn.addEventListener("click", function () {

            if (video.paused) {

                video.play();

                playPauseBtn.innerHTML =
                    '<i class="fa-solid fa-pause"></i> Pause Video';

            } else {

                video.pause();

                playPauseBtn.innerHTML =
                    '<i class="fa-solid fa-play"></i> Play Video';

            }

        });

    }

    if (exploreBtn) {

        exploreBtn.addEventListener("click", function () {

            alert("Welcome to Muhammad Ahmad's Portfolio!");

        });

    }

});
