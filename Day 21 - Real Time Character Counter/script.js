const textInput = document.querySelector('#textInput');
const charCount = document.querySelector('#charCount');
const remainingCount = document.querySelector('#remainingCount');
const copyButton = document.querySelector('.copy-button');

const mainLength = 320

textInput.addEventListener('input', ()=> {
   let currectLength =  textInput.value.length
    let remaining =   mainLength - currectLength
   remainingCount.textContent = remaining

   charCount.textContent =  textInput.value.length

   if(remaining == 0){
alert("Character limit reached! You can't type more than 320 characters.");
    remainingCount.style.color = "#e23232ff"
   }
   else{
     remainingCount.style.color = " #38bdf8";
   
   }
})



function copyText(){
        navigator.clipboard.writeText(textInput.value)
        alert("Text Copied!")
}
