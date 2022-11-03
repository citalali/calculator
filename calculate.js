var holdOp = '' ;
var holdNum = '';
const buttons = document.getElementsByTagName("button");
const result = document.getElementById("h1");
var numberScrn = '';
var OperatorNumber = '0';
var EingabeNumber = '0';


function changeH1() {
	document.getElementById("h1").innerHTML = elementId;
}

//document.addEventListener('click', (e) =>
 // {
    // Retrieve id from clicked element
  //  let elementId = e.target.id;
    // If element has id
//	changeH1();
//}
				/// enter Number 
					/// run function to assign var to number -> var name +1 
						/// var to hold number of operators and Numbers!!!! 
						  /// new var + VarOperatorNumber = Operator SAME WITH NUMBERS
/// var holdOp + OperatorNumber = holdOp;
/// var holdNum + EingabeNumber = holdNum;
/// OperatorNumber = OperatorNumber + 1; same same thing

			//// UBERALL numberScrn changes 
			/// ERGEBNIS numberScrn = EingabeNumber1 + OperatorNumber1 + EingabeNumber2 + OperatorNumber2 bla bla LOOP!!!


			////// LOOOPS ANSCHAUEN AGAIN SONST SUPI VILLEICHT AUCH WENN DANN LOOP
						

						  
document.getElementById("1").onclick = function() {
	document.body.style.background = 'green';
	numberScrn = numberScrn + 1 ;
	changeH1();
};				

document.getElementById("+").onclick = function() {
	document.body.style.background = 'pink';
	numberScrn = numberScrn + '+' ;
	holdOp = + ;
	changeH1();
};	
document.getElementById("2").onclick = function() {
	document.body.style.background = 'grey';
	numberScrn = numberScrn + 2;
	changeH1();
};	

document.getElementById("=").onclick = function() {
	document.body.style.background = 'yellow';
	numberScrn = holdNum + holdOp + holdNum;
	changeH1();
};	


/**
const buttonPressed = e => { 
  result.innerHTML = `ID of <em>${e.target.innerHTML}</em> is <strong>${e.target.id}</strong>`;
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

						  
						  
						  


 function changeBackground(color) {
	document.body.style.background = color;
}

document.getElementsByClassName("but").onclick = function() {

	changeH1();
};



const userInput = document.querySelectorAll('button'); // Makes it into a nodelist 


function changeScreen() {
	document.getElementById("h1") = userInput;

}
document.getElementById("one").onclick = alert('green');
**/
