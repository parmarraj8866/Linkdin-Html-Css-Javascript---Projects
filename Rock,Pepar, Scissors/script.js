
let userCountWin = 0;
let comCountWin = 0;


const boxes = document.querySelectorAll(".box");
const para = document.querySelector("#para");

const youScore = document.querySelector("#youScore");
const comScore = document.querySelector("#comScore");

const gencomChoice = () => {
    const options = ["rock", "paper", "Scissors"];
    const comSelect = Math.floor(Math.random() * 3);
    return options[comSelect];
}

const showWinner = (userWin) => {
    if (userWin) {
        userCountWin++;
        youScore.innerText = userCountWin;

        console.log("You are Winner!");

        para.innerText = "You are Winner!";
        para.style.backgroundColor = "green";
    } else {
        comCountWin++;
        comScore.innerText = comCountWin;
        console.log("You are Loss");
        para.innerText = "You are Loss";
        para.style.backgroundColor = "red";


    }
}

function playGame(userChoice) {
    console.log("User Cliked", userChoice);

    // generate Com
    const comChoice = gencomChoice();
    console.log("Computor Cliked", comChoice);

    // Condition
    if (userChoice === comChoice) {
        console.log("Game is Draw");
        para.innerText = "Game is Draw";
        para.style.backgroundColor = "blue";

    }
    else {
        let userWin = true;
        if (userChoice === "rock") {

            userWin = comChoice === "paper" ? false : true;

        } else if (userChoice === "paper") {

            userWin = comChoice === "Scissors" ? false : true;
        }
        else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const userChoice = box.getAttribute("id");
        playGame(userChoice);
    })
})

