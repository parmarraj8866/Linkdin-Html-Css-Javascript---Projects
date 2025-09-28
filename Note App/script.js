let inputbox = document.querySelector(".inputbox");
let textarea = document.querySelector("#textarea");
const button = document.querySelector("button");
const Update = document.querySelector(".Update");

let objArr = JSON.parse(localStorage.getItem('userObject')) || []


button.addEventListener('click', () => {

    if(inputbox.value == "" && textarea.value == ""){
        alert("Please Enter Title and Message");
    }else{

        let id = objArr.length + 1
        const obj = {
            userid: id,
            usertitle: inputbox.value,
            usertextarea: textarea.value
        }
        
        objArr.push(obj);
        localStorage.setItem('userObject', JSON.stringify(objArr))
        
        userFNX()
    }
})


function userFNX() {
    let output = ""
    objArr.forEach((user, index) => {

        output += `<div class="item">
            <p>Note: ${user.userid}</p>
            <h1>Title : <span>${user.usertitle}</span></h1>
            <p class="writenote">${user.usertextarea}</p>
            <div class="itemsBtns">
            <button class="editBtn" onclick="editFNX(${index})">Edit</button>
            <button class="deleteBtn" onclick="deleteFNX(${index})">Delete</button> </div>
        </div>`
    })

    document.querySelector('.container2').innerHTML = output

    document.querySelector(".inputbox").value = "";
    document.querySelector("#textarea").value = "";
}



function deleteFNX(id) {

    objArr.splice(id, 1);

    localStorage.setItem('userObject', JSON.stringify(objArr))
    userFNX();
}


let index = ""
function editFNX(i) {
    button.style.display = 'none';
    index = i;
    inputbox.value = objArr[index].usertitle
    textarea.value = objArr[index].usertextarea
    Update.style.display = 'block';
    
}

Update.addEventListener("click", () => {
    
    objArr[index].usertitle = inputbox.value
    objArr[index].usertextarea = textarea.value
    
    localStorage.setItem('userObject', JSON.stringify(objArr))
    
    Update.style.display = 'none';
    button.style.display = 'block';

    userFNX()
})

userFNX()