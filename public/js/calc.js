function docalc() {
	var x = parseInt(document.getElementById('operand1').value)
	var y = parseInt(document.getElementById('operand2').value);
	var sign = document.getElementById('operator').value;
	if (sign == '+') {
		var z = x + y;
	} else if (sign == '-'){
		var z = x - y;
	} else if (sign == '*'){
		var z = x * y;
	} else {
		var z = x / y;
	} 
	alert(x + sign + y + '=' + z)
}