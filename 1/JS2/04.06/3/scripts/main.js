const input1 = document.querySelector(".input1");
const result = document.querySelector(".result");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  const val1 = input1.value;
  let hourInput = Number();
  let minuteInput = Number();
  let meridiemInput = 'null';
  let hour24 = Number();
  let hour12 = Number();
  let meridiem = '';

  if (val1.length < 3 || val1.length > 7) {
    result.innerHTML = "Not a time";
    return;
  }

  if (val1[1] === ':') {
    hourInput = (val1[0]);
    minuteInput = val1[2] + val1[3];
    if (val1.length > 4) {
      meridiemInput = val1[4] + val1[5];
    }
  }
  else if (val1[2] === ':') {
    hourInput = (val1[0] + val1[1]);
    minuteInput = (val1[3] + val1[4]);
    if (val1.length > 5) {
      meridiemInput = val1[5] + val1[6];
    }
  } else {
    result.innerHTML = "Enter the correct time";
    return;
  }

  if ((minuteInput > 59) || (hourInput > 23) || (minuteInput === 'NaN') || (hourInput === 'NaN')) {
    result.innerHTML = "Enter the correct time";
    return;
  }

  if (meridiemInput === 'null') {
  }
  else if ((meridiemInput === 'PM') || (meridiemInput === 'pm')) {
    meridiemInput = 'PM';
  }
  else if ((meridiemInput === 'AM') || (meridiemInput === 'am')) {
    meridiemInput = 'AM';
  }
  else {
    result.innerHTML = "Enter the correct time";
    return;
  }

  hourInput = Number(hourInput);

  if ((meridiemInput === 'PM' || meridiemInput === 'AM') && (hourInput === 0) || ((meridiemInput === 'PM' || meridiemInput === 'AM') && (hourInput > 12))) {
    result.innerHTML = "Enter the correct time";
    return;
  }

  if (meridiemInput === 'null') {
    hour24 = hourInput;
    if (hourInput < 12) {
      meridiem = 'AM';
      if (hourInput === 0) {
        hour12 = 12;
      } else if (hourInput < 12) {
        hour12 = hourInput;
      }
    }
    else if (hourInput > 11) {
      meridiem = 'PM';
      if (hourInput === 12) {
        hour12 = 12;
      }
      else {
        hour12 = (hourInput - 12);
      }
    }
  }
  else if (meridiemInput === 'PM') {
    hour12 = hourInput;
    meridiem = meridiemInput;
    if (hourInput < 12) {
      hour24 = (hourInput + 12);
    }
    else if (hourInput === 12) {
      hour24 = 12;
    }
  }
  else if (meridiemInput === 'AM') {
    hour12 = hourInput;
    meridiem = 'AM';
    if (hourInput < 12) {
      hour24 = hourInput;
    }
    else if (hourInput === 12) {
      hour24 = '0';
    }
  }

  hour24 = hour24 + "";

  if (hour24.length < 2) {
    hour24 = "0" + hour24;
  }

  result.innerHTML = "Time meridiem: " + ' ' + hour12 + ':' + minuteInput + meridiem + '<hr>' + 'Military time: ' + hour24 + ':' + minuteInput;
});
