window.onload = init;

function init(){

	var displayBox 	= document.getElementById("displayBox");
	var userInputBox = document.getElementById("userInputBox");
	var answerButton = document.getElementById("answerButton");
	var startB = document.getElementById("startB");
	
	
	
	//startB.onclick = startGame;
	answerButton.onclick = checkAnswer;
    
	displayBox.value = "";
	userInputBox.value = "";
	
	console.log("initiated");

	startGame();
	
 function startGame(){
	displayBox.value = "";
	userInputBox.value = "";
	
	console.log("game started");
	n1 = getRandomNumber();
    n2 = getRandomNumber();	
	
	console.log("n1 is " + n1 + "  and  " + " n2 is " + n2);
	displayBox.value = n1 + " + " + n2 + " =";
 }
	
 function getRandomNumber(){
	var x = Math.floor((Math.random() * 10) + 1);	
	return x;
 }
	
	
	
 function checkAnswer(){
		
		console.log("check answer button was clicked");
		var userAnswer = userInputBox.value;
	

		if (userAnswer == ""){
			alert("Enter Your Answer Please");
		
		}  else {
			var correctA = parseInt(n1 + n2);
			console.log(n1 + " + " + n2 + " = " + userAnswer + "   CORRENCT A IS: " + correctA); 
			if (userAnswer == correctA){
				alert("correct")
			} else {
				alert("WRONG!");
			}
			
		}	
	startGame();
 }	
}
