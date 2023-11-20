const btn = document.querySelector("button");
const body = document.body;
const heading = document.querySelector("h1");

btn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        btn.innerText = "Light Mode";
        heading.innerText = "You are current using dark mode"
    } else {
        btn.innerText = "Dark Mode";
        heading.innerText = "You are current using light mode"
    }
})