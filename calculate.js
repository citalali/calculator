// variables and functions
var numberScreen = "";
var numberAtMoment;
var numberToCalc = [];
var operatorsToCalc = [];
var result;
var numbersTotal = "";
var operatorsTotal = "";
var calculateSingelResult = "";
var numOne;
var operator = 0;
var numTwo = 1;
var lastInput = "";
var length = 0;
var resetCount = 0;
var clickedEquals = false;

function changeH1() {
  numberScreen = numberScreen + numberAtMoment;
  document.getElementById("h1").innerHTML = numberScreen;
}

function setOnClick() {
  var buttons = document.getElementsByClassName("but");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      console.log("clicked", buttons[i].value);
      if (clickedEquals) {
        resetCalculator();
        console.log("reset");
      }
      if (buttons[i].value == "=") {
        console.log("equals");
        clickedEquals = true;
      }
      numberAtMoment = buttons[i].value;
      checkDoubleDigits();
    };
  }
}

function calculateEnd() {
  while (operatorsToCalc.length > 0) {
    calculations();
  }
  result = numberToCalc[0];
  numberAtMoment = "=" + result;
  changeH1();
}

function calculations() {
  let i = 0;
  let t = operatorsToCalc.length;
  let index = -1;

  for (i = 0; i < t; i++) {
    if (operatorsToCalc[i] === "*" || operatorsToCalc[i] === "/") {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    calculateSingel(
      operatorsToCalc[index],
      numberToCalc[index],
      numberToCalc[index + 1]
    );
    operatorsToCalc.splice(index, 1);
    numberToCalc.splice(index, 2, calculateSingelResult);
  } else {
    calculateSingel(operatorsToCalc[0], numberToCalc[0], numberToCalc[1]);
    operatorsToCalc.splice(0, 1);
    numberToCalc.splice(0, 2, calculateSingelResult);
  }
}

function calculateSingel(op, a, b) {
  switch (op) {
    case "+":
      calculateSingelResult = parseInt(a) + parseInt(b);
      break;
    case "-":
      calculateSingelResult = parseInt(a) - parseInt(b);
      break;
    case "*":
      calculateSingelResult = parseInt(a) * parseInt(b);
      break;
    case "/":
      calculateSingelResult = parseInt(a) / parseInt(b);
      break;
    default:
      calculateSingelResult = "something didn't work";
  }
}

function resetCalculator() {
  numberScreen = "";
  numberAtMoment = "";
  numberToCalc = [];
  operatorsToCalc = [];
  result = "";
  numbersTotal = "";
  operatorsTotal = "";
  calculateSingelResult = "";
  numOne = "";
  operator = 0;
  numTwo = 1;
  lastInput = "";
  length = 0;
  resetCount++;
  clickedEquals = false;
  rotateN();
  changeH1();
}

function rotateN() {
  document.getElementById("casino").style.transform =
    "rotate( " + resetCount + "turn)";
}

function checkDoubleDigits() {
  var inputNow = "";
  if (numberAtMoment > -1) {
    inputNow = "number";
    if (inputNow == lastInput) {
      length = numberToCalc.length - 1;
      var digits = numberToCalc[length];
      numberToCalc[length] = digits + numberAtMoment;
      changeH1();
    } else {
      numberToCalc.push(numberAtMoment);
      lastInput = "number";
      changeH1();
    }
  } else if (numberAtMoment == "=") {
    calculateEnd();
  } else if (numberAtMoment == "reset") {
    resetCalculator();
  } else {
    inputNow = "operator";
    if (inputNow == lastInput) {
      numberAtMoment = " error ";
      changeH1();
    } else if (numberAtMoment == "*") {
      operatorsToCalc.push(numberAtMoment);
      lastInput = "operator";
      changeH1();
    } else {
      operatorsToCalc.push(numberAtMoment);
      lastInput = "operator";
      changeH1();
    }
  }
}

console.log(buttons, typeof buttons);
setOnClick();
