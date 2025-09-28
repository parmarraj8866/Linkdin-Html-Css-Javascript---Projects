const boxes = document.querySelector('.boxes');
const boxesB = document.querySelector('.boxesB');
const box = document.querySelector('.box');
let expenseName = document.querySelector('#expenseName');
let expenseAmount = document.querySelector('#expenseAmount');
let category = document.querySelector('#category');
let expenseDate = document.querySelector('#expenseDate');
const update = document.querySelector('.update');
let totalAmount = document.querySelector('.totalAmount');

const addexpensebtn = document.querySelector('.addexpensebtn');

let objArr = JSON.parse(localStorage.getItem('objArr')) || []


boxesB.style.display = "flex"



function productExpense() {
    let output = "";
    
    var totalAmountcount = 0;
    
    objArr.forEach(function (user, index) {
        output += `<div class="box">
        <p>${user.expenseName}</p>
                     <p>${user.expenseAmount}</p>
                     <p>${user.category}</p>
                     <p>${user.expenseDate}</p>
                     <div>
                         <button class="editBtn" onclick="editFNX(${index})">Edit</button>
                         <button class="deleteBtn" onclick="deleteFNX(${index})">Delete</button>
                     </div>
             </div>`
        totalAmountcount += eval( user.expenseAmount)
    })
    boxes.innerHTML = output

    totalAmount.innerHTML = totalAmountcount
}


 
addexpensebtn.addEventListener('click', function () {

    let id = objArr.length + 1;


    const obj = {
        id,
        expenseName: expenseName.value,
        expenseAmount: expenseAmount.value,
        category: category.value,
        expenseDate: expenseDate.value,
    }

    objArr.push(obj)

    localStorage.setItem("objArr", JSON.stringify(objArr));
    productExpense();


    expenseName.value = ""
    expenseAmount.value = ""
    category.value = ""
    expenseDate.value = ""
})


function editFNX(id) {

    addexpensebtn.style.display = "none";
    update.style.display = "block";

    expenseName.value = objArr[id].expenseName
    expenseAmount.value = objArr[id].expenseAmount
    category.value = objArr[id].category
    expenseDate.value = objArr[id].expenseDate

    update.addEventListener('click', function () {


        const newObj = {
            id,
            expenseName: expenseName.value,
            expenseAmount: expenseAmount.value,
            category: category.value,
            expenseDate: expenseDate.value,
        }

        objArr[id] = newObj;
        localStorage.setItem("objArr", JSON.stringify(objArr));

        addexpensebtn.style.display = "block";
        update.style.display = "none";

        expenseName.value = ""
        expenseAmount.value = ""
        category.value = ""
        expenseDate.value = ""

        productExpense();
    })
}



function deleteFNX(id) {


    objArr.splice(id, 1);

    localStorage.setItem("objArr", JSON.stringify(objArr));

    productExpense();
}
productExpense();