const elOne = document.querySelector(".one");
const elTwo = document.querySelector(".two");
const elThree = document.querySelector(".three");



document.querySelector(".one").addEventListener("click", function(){
    document.getElementById("one").style.backgroundColor = "yellow";
});

document.querySelector(".two").addEventListener("click", function(){
    document.getElementById("two").style.backgroundColor = "yellow";
});

document.querySelector(".three").addEventListener("click", function(){
    document.getElementById("three").style.backgroundColor = "yellow";
});
