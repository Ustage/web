var x;
var z;
var q;
x = prompt("Введите число x" );
z = prompt("Введите число z" );
q = prompt("Введите число q" );
if(x > z && x > q){
	alert("Самое большое число X = " + x);
} else if(z > x && z > q) {
	alert("Самое большое число Z = " + z);
}else if(q > x && q > z) {
	alert("Самое большое число Q = " + q);
} else if(q == x && x > z){
	alert("Q = X = " + q)
} else if(q == z && z > x){
	alert("Q = Z = " + q)
} else if(z == x && x > q){
	alert("Z = X = " + z)
}
