var numberScreen = "0";

function changeH1() {
  document.getElementById("h1").innerHTML = numberScreen;
}

function setOnClick() {
  var buttons = document.getElementsByClassName("but");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      numberScreen = buttons[i].value;
      changeH1();
    };
  }
}

// begging of the script

console.log(buttons, typeof buttons);

setOnClick();
