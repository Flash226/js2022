const input1 = document.querySelector(".input1");

const result = document.querySelector(".result");
const button = document.querySelector("button");

result.innerHTML = "Obichniy";


button.addEventListener("click", function () {
  const val1 = input1.value;


  if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
    result.innerHTML = "Not a number value was detected. Triangle cannot be created";
    return;
  }

  if ((val2 + val1) < val3 || (val3 + val1) < val2 || (val2 + val3) < val1) {
    result.innerHTML = "Triangle is impossible to create";
    return;
  }

  if (val1 === val2 && val2 === val3 && val1 === val3) {
    result.innerHTML = "Rovnostoronniy";
    return;
  }

  if (val1 === val2 || val1 === val3 || val2 === val3) {
    result.innerHTML = "Rovnobedrenniy";
  } else {
    //шукаємо найменші сторони трикутника
    if (val1 < val2 && val1 < val3) {
      if (val2 < val3) {
        sideA = val1;
        sideB = val2;
        sideC = val3;
      } else {
        sideA = val1;
        sideB = val3;
        sideC = val2;
      }
    }
    if (val2 < val1 && val2 < val3) {
      if (val1 < val3) {
        sideA = val2;
        sideB = val1;
        sideC = val3;
      } else {
        sideA = val2;
        sideB = val3;
        sideC = val1;
      }
    }
    if (val3 < val1 && val3 < val2) {
      if (val1 < val2) {
        sideA = val3;
        sideB = val1;
        sideC = val2;
      } else {
        sideA = val3;
        sideB = val2;
        sideC = val1;
      }
    }
    if ((sideA / 3 * 4) === sideB && ((sideA / 3 * 5) === sideC)) {
      result.innerHTML = "Egipetskiy";
      return;
    }
    if ((sideA * sideA) + (sideB * sideB) === (sideC * sideC)) {
      result.innerHTML = "Pryamoygolnuy";
      return;
    }
    else {
      result.innerHTML = "Obichniy";
    }
  }
});
