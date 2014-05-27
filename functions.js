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

	var answers = [3];

	for(var i=0;i<4;i++){

		answers[i]=generateNumber();
	}

	var rightPosition = Math.floor((Math.random() * 10)%4)
	answers[rightPosition] = rightAnswer;

	for(var i=0;i<4;i++){

		document.getElementById(Math.floor(i)).innerHTML = answers[i];
	}


}
