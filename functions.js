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

	var respostas = [3];

	for(var i=0;i<4;i++){

		respostas[i]=generateNumber();
	}

	var posicaoCerta = Math.floor((Math.random() * 10)%4)
	respostas[posicaoCerta] = rightAnswer;

	for(var i=0;i<4;i++){

		document.getElementById(Math.floor(i)).innerHTML = respostas[i];
	}


}
