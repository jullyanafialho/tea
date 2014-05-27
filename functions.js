function generateNumber(){
	var a = Math.floor((Math.random() * 10) + 1);
	return a;
}

function writeQuestion(){
	var a = generateNumber() ;
	var b = generateNumber() ;
	var x = a + "*" + b ;
 	document.getElementById("question").innerHTML = x;
 	return a*b;
}

function answersQuestion(){
	var rightAnswer = writeQuestion();
	document.getElementById("answers").innerHTML = rightAnswer;

}
