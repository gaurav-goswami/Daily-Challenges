const mainContainer = document.querySelector(".container");
const btn = document.querySelector('.btn');
const colorValue = document.querySelector('.current-color')

const generateRandomColor = () => {
    const randomValue1 = Math.floor(Math.random() * 256);
    const randomValue2 = Math.floor(Math.random() * 256);
    const randomValue3 = Math.floor(Math.random() * 256);

    return [randomValue1, randomValue2, randomValue3];
};

btn.addEventListener('click' , () => {
    const value = generateRandomColor();
    mainContainer.style.backgroundColor = `rgb(${value})`;
    colorValue.innerText = `Current Color : rgb(${value})`
})