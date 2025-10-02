

let colorBox = document.querySelector("#colorBox");
let colorCode = document.querySelector("#colorCode");
const generateBtn = document.querySelector("#generateBtn");


function generateColor(){
    let color = Math.floor(Math.random() * 27767215).toString(16)
    color = color.padStart(6, "0");
    colorBox.style.backgroundColor = "#" + color
    colorCode.textContent = "#" + color
}

generateBtn.addEventListener("click", ()=> {
generateColor()
})
