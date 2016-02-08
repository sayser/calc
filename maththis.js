window.onload = init;

function init(){

	var displayBox 	= document.getElementById("displayBox");
	var userInputBox = document.getElementById("userInputBox");
	var answerButton = document.getElementById("answerButton");
	var startB = document.getElementById("startB");
	var list_ul = document.getElementById("list_ul");
	
	
	//startB.onclick = startGame;
	answerButton.onclick = checkAnswer;
    startB.onclick = startClicked;
	
	function startClicked(){
		
		var score = userInputBox.value;
		
		
		var li = document.createElement("li");
		li.innerHTML = score;
		list_ul.appendChild(li);
		saveScore(score);
	}
	
	
	displayBox.value = "";
	userInputBox.value = "";
	
	console.log("initiated");

	startGame();
	loadScore();
	
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

 function saveScore(item){
	 var scoreArray = getStoredArray("scorelist");
	 scoreArray.push(item);
	 localStorage.setItem("scorelist", JSON.stringify(scoreArray));
 }
 
 function loadScore() {
	 var scoreArray = getSavedScore();
	 if (scoreArray != null){
		 
		 for (var i = 0; i < scoreArray.length; i++){
			 
			var li = document.createElement("li");
			li.innerHTML = scoreArray[i];
			list_ul.appendChild(li);
		 }
	 } 
 }
 
 function getSavedScore() {
	 return getStoredArray("scorelist");
 }
 
 function getStoredArray(key){
	var scoreArray = localStorage.getItem(key);
		if (scoreArray == null || scoreArray == ""){
			scoreArray = new Array();
		} else {
			scoreArray = JSON.parse(scoreArray);
		}
		return scoreArray;
 }
 
}
