let boxes = document.querySelectorAll(".box");

let msg = document.querySelector(".msg");

let userWinCount = 0;
let comWinCount = 0;

let para1 = document.querySelector("#para1");
let para2 = document.querySelector("#para2");

// Computer Generate Random Choice : 
const genComputer = () => {
    let arr = ["snack", "water", "gun"];
    let comValue = Math.floor(Math.random() * 3);
    return arr[comValue];
}


// Click karne Par Events 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const userValue = box.getAttribute("id");
        console.log("Clicked Button", userValue);
        playGame(userValue)
    })
})


// user Winner Condition
const UserWinner = (winner) => {
    if (winner) {
        msg.innerText = "You are Winner";
        msg.style.backgroundColor = "green";
        ++userWinCount;
        para1.innerText = userWinCount;
    } else {
        msg.innerText = "You are Loss";
        msg.style.backgroundColor = "red";
        ++comWinCount;
        para2.innerText = comWinCount;
    }
}

// Game play Conditions 
function playGame(userValue) {
    const cValue = genComputer();
    console.log(cValue);

    if (userValue === cValue) {
        msg.innerText = "Game Was Draw!";
        msg.style.backgroundColor = "blue";
    }
    else {
        let userWin = true;
        if (userValue === "snack") {
            userWin = cValue === "gun" ? false : true;

        } else if (userValue === "water") {

            userWin = cValue === "snack" ? false : true;

        } else {
            userWin = cValue === "water" ? false : true;
        }
        UserWinner(userWin);
    }
}
