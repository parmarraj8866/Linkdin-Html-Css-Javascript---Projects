const signUp = document.querySelector("#sing-up");
const login = document.querySelector("#login");

const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

let loginEmail = document.querySelector("#loginEmail");
let loginPassword = document.querySelector("#loginPassword");
let signupName = document.querySelector("#signupName");
let signupEmail = document.querySelector("#signupEmail");
let signupPassword = document.querySelector("#signupPassword");

let errorShow = document.querySelector(".errorShow")

let signUpButton = document.querySelector(".signUp-btn")
let loginButton = document.querySelector(".login-btn")

let objArr = JSON.parse(localStorage.getItem('objArr')) || [];


signUp.addEventListener("click", function () {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
})

login.addEventListener("click", function () {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
})


signUpButton.addEventListener('click', function () {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        errorShow.innerHTML = "Please Fill All Information"
    }
    else {
        const obj = {
            signupName: signupName.value,
            signupEmail: signupEmail.value,
            signupPassword: signupPassword.value
        }

        objArr.push(obj);
        localStorage.setItem('objArr', JSON.stringify(objArr))
        signupForm.reset();
        alert("Congratulation You Sing-Up Successfully!")
    }
})


loginButton.addEventListener('click', function () {

    for (let val of objArr) {

        if (val.signupEmail.toLowerCase() === loginEmail.value.toLowerCase() && val.signupPassword.toLowerCase() === loginPassword.value.toLowerCase()) {
            alert("Congratulation You Login Successfully!")
            loginForm.reset();
            errorShow.innerHTML = ""
            break;
        }
        else if (loginEmail.value !== "" || loginPassword.value !== "") {
            errorShow.innerHTML = "Not Match Email & Password"

        }
        else {
            errorShow.innerHTML = "Please Enter Email & Password"
        }
    }
})