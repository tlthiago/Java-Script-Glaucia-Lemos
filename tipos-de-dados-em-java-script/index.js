//Number
let idade = 26;
console.log(idade);

//Float
let precoMouse = 19.99;
console.log(precoMouse);

//String
let nome = "Thiago";
console.log(nome);

//Boolean
let nomeVerdadeiro = true;
console.log(nomeVerdadeiro);

let nomeFalso = false;
console.log(nomeFalso);

//Date
let dataHoje = new Date();
console.log(dataHoje);

//Function
let resultado = adicionarNumeros(5, 2);

function adicionarNumeros(num1, num2) {
  return num1 + num2;
}

console.log(resultado);

//Array
let frutas = ["Banana", "Morango", "Abacaxi"];
console.log(frutas);

//Object
const pessoa = {
  nome: "Thiago",
  sobrenome: "Alves",
  idade: 26,
};
console.log(pessoa);

//NaN
let num = NaN;
console.log(typeof num); //"number"
console.log(num == NaN);
console.log(num === NaN);

//Null
let variavelQualquer = null;
console.log(variavelQualquer);

//undefined
let carro;
carro = undefined;
console.log(carro);

//typeof
console.log(typeof 1);
console.log(typeof "Thiago Alves");

//instanceof
class Carro {}
let carro2 = new Carro();
console.log(carro2 instanceof Carro);

//igualdade estrita
console.log(20 === 20);
console.log("20" === 20);

//igualdade solta
console.log(20 == 20);
console.log("1" == 1);