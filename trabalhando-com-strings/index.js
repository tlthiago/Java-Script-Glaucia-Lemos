let str1 = "Olá ";
let str2 = "Mundo!";

let str3 = str1 + str2;

console.log(str1);
console.log(str1 + str2);
console.log(str3);
console.log(str1 + "Grande " + str2);

let num1 = 1;
let num2 = "1";
console.log(num1 + num2);
console.log(num1 + 1);

let str4 = "0";
let num3 = 1;
let num4 = 2;
let num5 = "3";

console.log(str4.concat(num3, num4, num5));
console.log(num3.concat(num4, num5)); //Irá retornar erro pois o tipo numerico não possui o método concat