const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");

const fio = () => {
  let val1 = input1.value;
  let val2 = input2.value;
  let val3 = input3.value;

  if ((/[^A-zА-я']/.test(val1) === true) 
   || (/[^A-zА-я']/.test(val2) === true) 
   || (/[^A-zА-я']/.test(val3) === true)) {
    result2.innerHTML = 'Check the correctness';
    result2.style.backgroundColor = 'red';
    return;
  } else {
    result2.innerHTML = '';
  }
  val1 = val1.charAt(0).toUpperCase() + val1.slice(1).toLowerCase();
  val2 = val2.charAt(0).toUpperCase() + '.';
  if (val2 === '.') {
    val2 = '';
  }
  val3 = val3.charAt(0).toUpperCase() + '.';
  if (val3 === '.') {
    val3 = '';
  }
  result1.innerHTML = `${val1} ${val2} ${val3}`;
}

input1.addEventListener('change', fio);
input2.addEventListener('change', fio);
input3.addEventListener('change', fio);
