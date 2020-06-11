function plus(){
	var num1, num2, result;
	num1 = document.getElementByld('n1').value;
	num1 = parselnt(num1);

	num2 = document.getElementByld('n2').value;
	num2 = parselnt(num2);

	result = num1+num2;
	//innerHTML
	document.getElementByld('out').innerHTML = result;
}

function minus() {
		var num1, num2, result;
	num1 = document.getElementByld('n1').value;
	num1 = parselnt(num1);

	num2 = document.getElementByld('n2').value;
	num2 = parselnt(num2);

	result = num1-num2;
	//innerHTML
	document.getElementByld('out').innerHTML = result;
}