let input = document.querySelector('input');
let span = document.querySelector('span');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');
let guess = Math.floor(Math.random() * 100) + 1; // 1-100
let count = 0;

function numberGuess(num) {
    count++;

    if (num === guess) {
        result.textContent = "🎉 Congratulations! You guessed the correct number!";
        result.style.color = "green";
    } 
    else if (num > guess) {
        result.textContent = "⬆️ Too big! Try a smaller number.";
        result.style.color = "red";
    } 
    else {
        result.textContent = "⬇️ Too small! Try a bigger number.";
        result.style.color = "red";
    }

    span.textContent = count;
}

btn.addEventListener('click', () => {
    let value = Number(input.value);

    if (!value) {
        result.textContent = "⚠️ Please enter a number!";
        result.style.color = "orange";
    } 
    else if (value < 1 || value > 100) {
        result.textContent = "❌ Please select a number between 1 and 100.";
        result.style.color = "orange";
    } 
    else {
        numberGuess(value);
    }

    console.log("User Input:", value);
    console.log("Random Guess:", guess);

    input.value = "";
});
