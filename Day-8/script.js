const output = document.querySelector('.result');
const inputBox = document.querySelector('input');
const form = document.querySelector('form');

const isPalindrome = (str) => {
    if (typeof str !== 'string') return "Only string are allowed";

    let cleanedString = str.toLowerCase().trim().replace(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\s]/g, ''); // We are cleaning the string here by converting it to lowercase first and then triming the extra whitespaces and finally replacing any special character or spaces present in the string.

    const reversedString = cleanedString.split('').reverse().join('');

    return cleanedString === reversedString;
};


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = inputBox.value;
    if(inputValue === "") {
        output.innerText = "";
        return;
    };

    const result = isPalindrome(inputValue);
    if(result) {
        output.innerText = "It is a palindrome";
        output.classList.add('good')
        output.classList.remove("bad");
    }else{
        output.innerText = "It is not a palindrome";
        output.classList.add('bad')
        output.classList.remove("good");
    }
})