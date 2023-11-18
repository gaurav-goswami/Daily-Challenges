const timeContainer = document.querySelectorAll(".time");

const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    timeContainer.forEach((div) => {
        if (div.classList.contains('hour')) {
            div.innerText = hours;
        } else if (div.classList.contains('min')) {
            div.innerText = minutes;
        } else {
            div.innerText = seconds;
        }
    })

    return { hours, minutes, seconds };
};

getCurrentTime();

setInterval(() => {
    getCurrentTime();
}, 1000);