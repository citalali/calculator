// variables and functions
var numberScreen = "";
var numberAtMoment;
var numberToCalc = [];
var operatorsToCalc = [];
var result = "";
var numbersTotal = "";
var operatorsTotal = "";
var calculateSingelResult = "";

function changeH1() {
  numberScreen = numberScreen + numberAtMoment;
  document.getElementById("h1").innerHTML = numberScreen;
  numbersToArray();
}

function setOnClick() {
  var buttons = document.getElementsByClassName("but");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      numberAtMoment = buttons[i].value;
      changeH1();
    };
  }
}

function numbersToArray() {
  if (numberAtMoment > 0) {
    numberToCalc.push(numberAtMoment);
    // if 2 numbers behind each other push in -1
  } else if (numberAtMoment == "=") {
    /// put function to Calculate in here
    calculateEnd();
  } else {
    operatorsToCalc.push(numberAtMoment);
  }
}

function calculateEnd() {
  numbersTotal = numberToCalc.length;
  operatorsTotal = operatorsToCalc.length;
  calculations();
  numberAtMoment = result;
  changeH1();
}

function calculations() {
  for (let i = 0; i < numberToCalc.length; ) {
    var operator = 0;
    var number = 2;
    if (i == 0) {
      calculateSingel(
        operatorsToCalc[operator],
        numberToCalc[0],
        numberToCalc[1]
      );
      b = +1;
      i++;
    } else {
      //calculateSingel(
      // operatorsToCalc[operator],
      //calculateSingelResult,
      //numberToCalc[number]
      //);
      operator++;
      number++;
      i++;
      result = calculateSingelResult;
    }
  }

  function calculateSingel(op, a, b) {
    calculateSingelResult = parseInt(a) + parseInt(b);
  }
  //for loop {}
  //switch statement

  //result =
  //parseInt(numberToCalc[0]) +
  //operatorsToCalc[0] +
  //parseInt(numberToCalc[1]);
}

// beginning of the script

console.log(buttons, typeof buttons);

setOnClick();
