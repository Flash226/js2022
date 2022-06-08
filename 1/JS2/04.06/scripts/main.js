const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");

const result = document.querySelector(".result");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  const val1 = Number(input1.value);
  const val2 = Number(input2.value);
  const val3 = Number(input3.value);

    if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
    console.log("Not a number value was detected. Triangle cannot be created");
    } else if ((val2 + val1) < val3 || (val3 + val1) < val2 || (val2 + val3) < val1) {
    console.log("Triangle is impossible to create");
    } else {
        if (val1 === val2 && val2 === val3 && val1 === val3) {
        console.log("Rovnostoronniy");
        } else if (val1 === val2 || val1 === val3 || val2 === val3) {
        console.log("Rovnobedrenniy");
        } else {
        console.log("Obichniy");
        }}
});