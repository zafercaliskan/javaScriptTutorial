//Java script typesafe (tip güvenli değildir.)
//1
var number1 = 10;
number1 = "Zafer Çalışkan"; //typesafe olmadığı için atama yapabiliriz.
console.log(number1);

var number2 = 10;
var number2 = "Zafer Çalışkan"; //typesafe olmadığı için atama yapabiliriz.
console.log(number2);

//Yukarıda ikiside atamaya izin verir.

let number3 = 10;
let number3 = "Zafer Çalışkan"; //Atamaya izin vermez. //Duplicate declaration, number3
console.log(number3);

let number4 = 10;
number4 = "Zafer Çalışkan"; //Atamaya izin verir. let belirtmedik. javascript tip güvenli değil.
console.log(number4);

let student = { id: 1, name: "Zafer" } //backendden veriler bu formata benzer gelir.
console.log(student)