const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector(".add");
const updateButton = document.querySelector(".update");
const box = document.querySelector(".box");
const boxitems = document.querySelector(".box-items");

let todoArray = JSON.parse(localStorage.getItem("todoList")) || [];
let editIndex = null;

function showData() {
  if (todoArray.length === 0) {
    boxitems.style.display = "none";
    box.style.height = "auto";
    return;
  }

  let taskList = "";
  todoArray.forEach((ele, index) => {
    taskList += `
      <div class="box-items-box1">
        <p>${ele.taskName}</p>
        <div>
          <i class="fa-solid fa-pen-to-square editBtn" onclick="editItem(${index})"></i>
          <i class="fa-solid fa-trash deleteBtn" onclick="deleteItem(${index})"></i>
        </div>
      </div>
    `;
  });

  boxitems.innerHTML = taskList;
  boxitems.style.display = "block";
  box.style.height = "auto";
  taskInput.value = "";
  addButton.style.display = "inline-block";
  updateButton.style.display = "none";
  editIndex = null;
}

addButton.addEventListener("click", () => {
  const taskName = taskInput.value.trim();

  if (!taskName) {
    alert("Please enter a task");
    return;
  }

  const todoObj = {
    id: Date.now(),
    taskName
  };

  todoArray.push(todoObj);
  localStorage.setItem("todoList", JSON.stringify(todoArray));
  showData();
});


function deleteItem(index) {
  todoArray.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(todoArray));
  showData();
}


function editItem(index) {
  taskInput.value = todoArray[index].taskName;
  editIndex = index;
  addButton.style.display = "none";
  updateButton.style.display = "inline-block";
  updateButton.style.backgroundColor = "yellow";
  updateButton.style.color = "black";
}

updateButton.addEventListener("click", () => {
  const updatedTask = taskInput.value.trim();

  if (!updatedTask) {
    alert("Please Enter a task");
    return;
  }

  todoArray[editIndex].taskName = updatedTask;
  localStorage.setItem("todoList", JSON.stringify(todoArray));
  showData();
});

showData();
