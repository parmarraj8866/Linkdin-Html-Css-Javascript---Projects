const button = document.querySelector('.btn');
let score = document.querySelector('.score');
let multy1 = document.querySelector('.multy1');
let multy2 = document.querySelector('.multy2');
let input = document.querySelector('.answer-input')


function generateNumber() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);

    multy1.innerHTML = num1
    multy2.innerHTML = num2
}
generateNumber()



let count = 0;
button.addEventListener('click', () => {

    let result = Number(multy1.innerHTML) * Number(multy2.innerHTML);
    console.log(result)

    if (count >= 0) {
        if (result == input.value) {
            ++count
        }
        else {
            if(count == 0){
                count = 0
            }else{
                count--
            }
        }
    }else{
        count  = 0
    }

    score.innerText = count
    input.value = ""
    generateNumber()
})