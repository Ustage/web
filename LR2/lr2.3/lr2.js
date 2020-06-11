var name;
var pass;
name = prompt("Введите имя" );
pass = prompt("Введите пароль");
if(name == "ivan" && pass == "333" || name == "ssss" && pass == "666" || name == "gibs" && pass == "0000"){
	alert("Добро пожаловать");
} else {
	alert("Пользователь не найден")
}
