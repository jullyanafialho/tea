function generateNumber(){
	var a = Math.floor((Math.random() * 10) + 1);
	return a;
}

function writeQuestion (){
	var x = generateNumber() + "*" + generateNumber() ;
 	document.getElementById("question").innerHTML = x;
}
