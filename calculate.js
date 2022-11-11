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

//alert("Warning: Please only use single digits and use * & / before + & -");

function changeH1() {
  numberScreen = numberScreen + numberAtMoment;
  document.getElementById("h1").innerHTML = numberScreen;
  // numbersToArray();
}

function setOnClick() {
  var buttons = document.getElementsByClassName("but");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      numberAtMoment = buttons[i].value;
      checkDoubleDigits();
      //changeH1();

      // numbersToArray();
    };
  }
}

/* function numbersToArray() {
  if (numberAtMoment > 0) {
    numberToCalc.push(numberAtMoment);
    lastInput = "number";
    // if 2 numbers behind each other push in -1
  } else if (numberAtMoment == "=") {
    /// put function to Calculate in here
    calculateEnd();
  } else if (numberAtMoment == "reset") {
    resetCalculator();
  } else {
    operatorsToCalc.push(numberAtMoment);
    lastInput = "operator";
  }
} */

function calculateEnd() {
  calculations();
  numberAtMoment = "=" + result;
  changeH1();
}

// var numTwo = 1;

function calculations() {
  let i = 0;
  let t = numberToCalc.length - 1;
  numOne = numberToCalc[0];

  do {
    calculateSingel(
      //(operator, 10, 5);
      operatorsToCalc[operator],
      numOne,
      numberToCalc[numTwo]
    );
    operator++;
    numOne = calculateSingelResult;
    numTwo++;
    i++;
  } while (i < t); //numberToCalc.length);
  result = calculateSingelResult;
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
      calculateSingelResult = "something didnt work";
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
  changeH1();
}

function checkDoubleDigits() {
  var inputNow = "";
  if (numberAtMoment > 0) {
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
      document.body.style.background = "grey";
      changeH1();
    } else {
      operatorsToCalc.push(numberAtMoment);
      lastInput = "operator";
      changeH1();
    }
  }
}

//for loop {}
//switch statement

//result =
//parseInt(numberToCalc[0]) +
//operatorsToCalc[0] +
//parseInt(numberToCalc[1]);

// beginning of the script

console.log(buttons, typeof buttons);

setOnClick();
