
let inputA = document.querySelector(".inputA");
let inputB = document.querySelector(".inputB");
const playerA = document.querySelector(".playerA h1");
const playerB = document.querySelector(".playerB h1");
const startBtn = document.querySelector(".startBtn");
const rollerContainer = document.querySelector(".rollerContainer");
const container = document.querySelector(".container");
const result = document.querySelector(".result");
const setplayer = document.querySelector(".setplayer");


startBtn.addEventListener("click", () => {

    if (inputB.value == "" || inputA.value == "") {
        result.style.color = 'red'
        result.textContent = `Please Enter Player's Name!`
    } else {
        rollerContainer.style.display = "block"
        container.style.display = "none"

        normalFNX()
        playGame()
    }
})

function normalFNX() {
    setTimeout(() => {
        rollerContainer.style.display = "none"
        container.style.display = "block"
       
    }, 2000)
}

function playGame() {

    let numA = Math.floor(Math.random() * 6) + 1
    let numB = Math.floor(Math.random() * 6) + 1

    var imageA = document.querySelector(".imageA");
    var imageB = document.querySelector(".imageB");

    if (numA === 1) {
        imageA.src = './dice1.png'
    } else if (numA === 2) {
        imageA.src = './dice2.png'
    } else if (numA === 3) {
        imageA.src = './dice3.png'
    } else if (numA === 4) {
        imageA.src = './dice4.png'
    } else if (numA === 5) {
        imageA.src = './dice5.png'
    } else if (numA === 6) {
        imageA.src = './dice6.png'
    }

    if (numB === 1) {
        imageB.src = './dice1.png'
    } else if (numB === 2) {
        imageB.src = './dice2.png'
    } else if (numB === 3) {
        imageB.src = './dice3.png'
    } else if (numB === 4) {
        imageB.src = './dice4.png'
    } else if (numB === 5) {
        imageB.src = './dice5.png'
    } else if (numB === 6) {
        imageB.src = './dice6.png'
    }
    finalWinning(numA, numB);
}

function finalWinning(numA, numB) {

    if (numA === numB) {
        result.style.color = '#ffc107'
        result.textContent = "Match is Draw 🤝"
    }
    else if (numA > numB) {
        result.style.color = '#ffc107'
        result.textContent = `${inputA.value} Win The Match 🥇`
    }
    else {
        result.style.color = '#ffc107'
        result.textContent = `${inputB.value} Win The Match 🥇`
    }
}

setplayer.addEventListener('click', () => {

    if (inputA.value != "" || inputB.value != "") {
        playerA.textContent = inputA.value
        playerB.textContent = inputB.value
    } else {
        playerA.textContent = "Player 1"
        playerB.textContent = "Player 2"
    }
})
