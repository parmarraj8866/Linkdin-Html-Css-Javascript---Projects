const questions = [
    {
        question: "What is the capital of india?",
        answer: [
            { text: "Mumbai", correct: "false" },
            { text: "Kolkata", correct: "false" },
            { text: "New Delhi", correct: "true" },
            { text: "Haryana", correct: "false" },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Earth", correct: "false" },
            { text: "Venus", correct: "false" },
            { text: "Mars", correct: "true" },
            { text: "Jupiter", correct: "false" },
        ]
    },
    {
        question: "Who invented the light bulb?",
        answer: [
            { text: "Nikola Tesla", correct: "false" },
            { text: "Thomas Edison", correct: "true" },
            { text: "Albert Einstein", correct: "false" },
            { text: "Isaac Newton", correct: "false" },
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answer: [
            { text: "Atlantic Ocean", correct: "false" },
            { text: "Arctic Ocean", correct: "false" },
            { text: "Indian Ocean", correct: "false" },
            { text: "Pacific Ocean", correct: "true" },
        ]
    },
]

let winCount = 0;
let quecount = document.querySelector(".quecount");
let queCount = 0;
let question1 = document.querySelector(".question1");
let button = document.querySelectorAll(".btn");
let next = document.querySelector(".next");


function showQuestions(index) {

    let q = questions[index];
    quecount.innerText = `${index + 1}`;
    question1.innerHTML = `${index + 1}. ${q.question}`;

    button.forEach((btn, i) => {

        btn.innerText = q.answer[i].text;
        btn.dataset.correct = q.answer[i].correct;

        btn.style.backgroundColor = "white";
        btn.style.color = "black"
        btn.disabled = false;
    });

}

button.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const isCorrect = e.target.dataset.correct === "true";   // 3. dataset not Understand
        // e.target.style.backgroundColor = isCorrect ? "green" : "red";

        if (isCorrect) {
            e.target.style.backgroundColor = "green"
            e.target.style.color = "white";
            ++winCount;
        } else {
            e.target.style.backgroundColor = "red"

        }

        button.forEach(btn => btn.disabled = true);// 1. UnderStand 
    })
});


// result 

next.addEventListener("click", () => {

    queCount++;
    if (queCount < questions.length) {
        showQuestions(queCount);
    } else {
        alert(`Quiz finished \nWinning Point are : ${winCount}`);
        location.reload(); // 2.  UnderStand
    }
});



showQuestions(queCount);