const generatePass = document.querySelector(".input1");
const inputRange = document.querySelector(".input2");
const rangescore = document.querySelector(".inputrange");
const upparCase = document.querySelector(".check-upparcase");
const lowerCase = document.querySelector(".check-lowercase");
const number = document.querySelector(".check-number");
const notNumber = document.querySelector(".check-notNumber");
const btn = document.querySelector(".btn");
const btnCopy = document.querySelector(".btnCopy");


rangescore.innerHTML = inputRange.value;

inputRange.addEventListener("input", () => {
    rangescore.innerHTML = inputRange.value;
})

const upparCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseArray = "abcdefghijklmnopqrstuwxyz";
const numberArray = "0123456789";
const notNumberArray = "[]{};':\",./<>?~!@#$%^&*()_+|=-`";



function GeneratePass() {

    let password = "";
    const passwordLength = parseInt(inputRange.value);

    console.log(passwordLength);


    let allArray = "";

    if (upparCase.checked) allArray += upparCaseArray;
    if (lowerCase.checked) allArray += lowerCaseArray;
    if (number.checked) allArray += numberArray;
    if (notNumber.checked) allArray += notNumberArray;

    for (let i = 0; i < passwordLength; i++) {

        const Index = Math.floor(Math.random() * allArray.length);
        console.log(Index);
        password += allArray[Index];
    }

    if (allArray.length === 0) {
        alert("Please Select upparCase, lowerCase, number, notNumber : ")
        password = "";
    }

    generatePass.value = password;

}

btn.addEventListener("click", GeneratePass);


btnCopy.addEventListener("click", () => {
    if (generatePass.value) {
        navigator.clipboard.writeText(generatePass.value);
        alert("Password Copied : " + generatePass.value);
    } else {
        alert("Please Generate Password");
    }
})