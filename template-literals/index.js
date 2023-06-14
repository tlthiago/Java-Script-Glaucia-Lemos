let str1 = "JavaScript";
let str2 = "legal";

//Sem template literals
console.log("Estou escrevendo códigos em", str1);
console.log("Estou escrevendo códigos em " + str1);

//Com template literals
console.log(`Estou escrevendo códigos em ${str1}`);

//Concatenação de variáveis
//Com template literals
console.log(`Formatando strings em ${str1} é ${str2}!`);

//Quebra de linhas
console.log("Podemos pular linhas com o uso do /n \n\nDessa forma");

console.log(`Podemos pular linhas


Dessa forma`);

//Expressões
let bool1 = true;

const getValue = (num) => {
  return num + num;
};

console.log(`O oposto de true é ${!bool1}`);
console.log(`1 + 1 é ${1 + 1}`);
console.log(`Resultado: ${getValue(10)}`);
