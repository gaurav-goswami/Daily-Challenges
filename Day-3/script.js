const card = document.querySelector(".card");
const body = document.body;
const button = document.querySelector(".play-button-container");
const img = document.querySelector("img");

let audio = null;

function playAudio() {
    if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
        button.innerText = "Play";
        img.setAttribute('src', "")
    } else {
        audio = new Audio("sweep.wav");
        audio.play();
        button.innerText = "Stop";
        img.setAttribute('src', "sound.gif")
        audio.addEventListener("ended", function () {
            button.innerText = "Play";
            img.setAttribute('src', "")
        });
    }
}

button.addEventListener("click", playAudio);

card.addEventListener("mouseover", () => {
    document.body.classList.add('blur');
    card.classList.add('card-normal')
});

card.addEventListener("mouseout", () => {
    document.body.classList.remove('blur');
    card.classList.remove('card-normal');
});