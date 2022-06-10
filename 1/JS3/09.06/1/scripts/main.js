const result = document.querySelector(".result");
const input1 = document.querySelector(".input1");
const buttonEl1 = document.querySelector("#button1");
const buttonEl2 = document.querySelector("#button2");
const buttonEl3 = document.querySelector("#button3");
const buttonEl4 = document.querySelector("#button4");
const buttonEl5 = document.querySelector("#button5");
const buttonEl6 = document.querySelector("#button6");
const buttonEl7 = document.querySelector("#button7");
const buttonEl8 = document.querySelector("#button8");
const buttonEl9 = document.querySelector("#button9");
const buttonEl10 = document.querySelector("#button10");


const check = (v) => {
    //result.innerHTML = v;
    input1.value = v;
}

buttonEl1.addEventListener('click', function() {check(1)});
buttonEl2.addEventListener("click", function() {check(2)});
buttonEl3.addEventListener('click', function() {check(3)});
buttonEl4.addEventListener('click', function() {check(4)});
buttonEl5.addEventListener('click', function() {check(5)});
buttonEl6.addEventListener('click', function() {check(6)});
buttonEl7.addEventListener('click', function() {check(7)});
buttonEl8.addEventListener('click', function() {check(8)});
buttonEl9.addEventListener('click', function() {check(9)});
buttonEl10.addEventListener('click', function() {check(0)});
