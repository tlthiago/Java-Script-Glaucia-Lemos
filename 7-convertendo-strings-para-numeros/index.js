// Strings para inteiros: parseInt();
let numeroDecimal = parseInt("50");
console.log(numeroDecimal);
console.log(typeof numeroDecimal);

let hexadecimal = parseInt("0xF");
console.log(hexadecimal);

let alfabeto = parseInt("ABCDE");
console.log(alfabeto);

// Strings para Floats: parseFloat();
let mouse = parseFloat("29.90");
console.log(mouse);
console.log(typeof mouse);

let uva = parseFloat("5.00");
console.log(uva);

let alfabeto2 = parseFloat("ABC");
console.log(alfabeto2);

// Números para Strings: toString();
let num = 26;
let idade = num.toString();
console.log(idade);
console.log(typeof idade);

// Exemplos de conversões: Templates Literais
const funcionario = {
    nome: "Thiago Alves",
    idade: 26,
    profissao: "Analista de Suporte Júnior",
    salario: 3600.00
}

console.log(`O funcionário ${funcionario.nome} tem idade de ${funcionario.idade}.
            Ele trabalha como ${funcionario.profissao} e ganha em torno de ${funcionario.salario};`);