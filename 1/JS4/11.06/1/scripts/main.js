const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const result = document.querySelector(".result");
const button = document.querySelector("button");

const gipotenusa = (kat1, kat2) => {
  if (isNaN(kat1) || isNaN(kat2) || kat1 === 0 || kat2 === 0) {
    result.innerHTML = "Enter valid lenght";
    return;
  }
  const gip = Math.sqrt(Math.pow(kat1, 2) + (Math.pow(kat2, 2)));
  result.innerHTML = "Gipotenusa = " + gip;
}

button.addEventListener('click', function() {gipotenusa(Number(input1.value), Number(input2.value))});