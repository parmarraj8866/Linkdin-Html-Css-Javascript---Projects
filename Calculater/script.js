let boxes = document.querySelectorAll(".box");
let input = document.querySelector(".inputIcon")

function calculateFNX(user) {

    if (user === "=") {
        try {
            input.value = eval(input.value)
        }
        catch (e) {
            input.value = "Enter Correct Value!";
        }
    }
    else if (user === "C") {
        input.value = "";
    }
    else {
        input.value += user;
    }
}


boxes.forEach((box) => {

    box.addEventListener("click", () => {
        const user = box.getAttribute("id");
        calculateFNX(user);
    });
});




