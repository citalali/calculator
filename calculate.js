
var holdNumber = "bla" ;

document.getElementsByClassName("but").onclick = function() {

	changeH1();
};


function changeH1() {
	document.getElementById("h1").innerHTML = elementId;
}

document.addEventListener('click', (e) =>
  {
    // Retrieve id from clicked element
    let elementId = e.target.id;
    // If element has id
	changeH1();
}


						  
const buttons = document.getElementsByTagName("button");
const result = document.getElementById("h1");

const buttonPressed = e => { 
  result.innerHTML = `ID of <em>${e.target.innerHTML}</em> is <strong>${e.target.id}</strong>`;
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

						  
						  
						  

/*
 function changeBackground(color) {
	document.body.style.background = color;
}



const userInput = document.querySelectorAll('button'); // Makes it into a nodelist 


function changeScreen() {
	document.getElementById("h1") = userInput;

}
document.getElementById("one").onclick = alert('green');
*/