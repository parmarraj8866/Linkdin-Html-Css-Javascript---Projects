const box = document.querySelector('.box ');
const box2 = document.querySelector('.box2 ');
const box3 = document.querySelector('.box3 ');
let boxi = document.querySelector('.box i');
let box2i = document.querySelector('.box2 i');
let box3i = document.querySelector('.box3 i');
const para = document.querySelector('.para ');
const para2 = document.querySelector('.para2 ');
const para3 = document.querySelector('.para3 ');

box.addEventListener('click', function () {
    if (boxi.classList.toggle('fa-angle-up')) {
        para.style.display = "block"
        boxi.classList.toggle('fa-angle-down')
    } else {
        para.style.display = "none";
        boxi.classList.toggle('fa-angle-down')
    }
})
box2.addEventListener('click', function () {
    if (box2i.classList.toggle('fa-angle-up')) {
        para2.style.display = "block"
        box2i.classList.toggle('fa-angle-down')
    } else {
        para2.style.display = "none";
        box2i.classList.toggle('fa-angle-down')
    }
})
box3.addEventListener('click', function () {
    if (box3i.classList.toggle('fa-angle-up')) {
        para3.style.display = "block"
        box3i.classList.toggle('fa-angle-down')
    } else {
        para3.style.display = "none";
        box3i.classList.toggle('fa-angle-down')
    }
})