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

alert("Warning: Please only use single digits and use * & / before + & -");

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
  calculations();
  numberAtMoment = result;
  changeH1();
}

var numTwo = 1;

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
//for loop {}
//switch statement

//result =
//parseInt(numberToCalc[0]) +
//operatorsToCalc[0] +
//parseInt(numberToCalc[1]);

// beginning of the script

console.log(buttons, typeof buttons);

setOnClick();
