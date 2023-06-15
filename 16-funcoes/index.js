// Exemplo 1 - Função
function raizQuadrada(numero) {
  return numero * numero;
}
console.log(raizQuadrada(6));

// Exemplo 2 - Função
function valorProdutoDesconto(preco, desconto) {
  let resultado = preco * desconto;
  console.log(`Você economizou ...: R$ ${resultado}`);
  return preco - resultado;
}
console.log(valorProdutoDesconto(50, 0.2));

// Exemplo 3 - Função
function conversorCelsiusParaFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(conversorCelsiusParaFahrenheit(40));
