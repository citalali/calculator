var holdOp = '' ;
var holdNum = '';
const buttons = document.getElementsByTagName("button");
const result = document.getElementById("h1");
var numberScrn = '';
var OperatorNumber = '0';
var EingabeNumber = [];
var i = 0;
var ERG = 0;

var plus = function(a, b) {
	ERG = a + b;
}

function equalz() {
	document.getElementById("h1").innerHTML = ERG;
}
function changeH1() {
	document.getElementById("h1").innerHTML = numberScrn;
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
						

						  
document.getElementById("one").onclick = function() {
	document.body.style.background = 'green';
	numberScrn = numberScrn + '1' ;
	EingabeNumber.push(1); 
	changeH1();
	i = i + 1;
};				

document.getElementById("+").onclick = function() {
	document.body.style.background = 'pink';
	numberScrn = numberScrn + '+' ;
holdOp = +0 ;
	changeH1();
};	
document.getElementById("two").onclick = function() {
	document.body.style.background = 'grey';
	numberScrn = numberScrn + '2';
	EingabeNumber.push(2);
	changeH1();
	i = i + 1;
};	

document.getElementById("=").onclick = function() {
	document.body.style.background = 'yellow';
	//numberScrn = EingabeNumber[0] + EingabeNumber[1] + EingabeNumber[2];
	plus(EingabeNumber[0], EingabeNumber[1]);
	equalz();
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
