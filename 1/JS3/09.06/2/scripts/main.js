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
const buttonEl11 = document.querySelector("#button11");
const buttonEl12 = document.querySelector("#button12");
const buttonEl13 = document.querySelector("#button13");
let dod1 = 000;
let dod2;

const check = (v) => {
    let val1 = input1.value;
    input1.value = val1 + v;
}

const summ = () => {
    let val1 = input1.value;
    if (val1 ==='' || val1 === 0){
        return;
    }
    input1.value = val1 + '+';
    dod1 = val1;
}

const res = () => {
    let val1 = input1.value;
    if  (dod1 === 000){
        return;
    }
    dod2 = val1.slice(dod1.length + 1),(val1.length);
    input1.value = Number(dod1) + Number(dod2);
}

const refresh = () => {
    location.reload()
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
buttonEl11.addEventListener('click', summ);
buttonEl12.addEventListener('click', res);
buttonEl13.addEventListener('click', refresh);