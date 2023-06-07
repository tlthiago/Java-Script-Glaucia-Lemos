// => 1) Exemplo do uso do var
// var nome = 'Thiago Alves';
// console.log(`Meu nome é...: ${nome}.`);

// function imprimirNome() {
//   var nome = "Thiago Alves";
//   console.log(`Meu nome é...: ${nome}.`);
// }

// imprimirNome();

// => 2) Exemplo do uso do let
// function imprimirIdade() {
//     for (let idade = 26; idade <= 35; idade++) {
//         console.log(`Idade dentro do for...: ${idade}`);
//     }
// }

// imprimirIdade();

// => 3) Exemplo do uso do const
// function imprimirIdade2() {
//   for (const idade2 = 26; idade2 <= 35; idade2++) {
//     // console.log(`Idade dentro do for...: ${idade2}`);
//   }
//   console.log(`Idade fora do for...: ${idade2}`);
// }

// imprimirIdade2();
const pessoa = {
  nome: "Thiago Alves",
  idade: 26,
};

function imprimirDadosPessoa() {
  console.log(
    `O Nome é...: ${pessoa.nome} e a idaide é...: ${pessoa.idade} anos.`
  );
}

imprimirDadosPessoa();
