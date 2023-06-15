// Criando array com dados
let arr1 = ["Thiago", 26, true];
console.log(arr1);

// Array length
console.log(arr1.length);

// Array index
console.log(arr1[2]);
console.log(Object.keys(arr1)); // Acessa diretamente a chave do objeto
console.log(Object.values(arr1)); // Acessa diretamente o valor do objeto

// Inserindo dados no array criado
let arrayLength = 2;
let arr2 = Array(arrayLength);
let arr3 = [];

arr2[0] = 55;
arr2[1] = true;
console.log(arr2);

arr3[0] = 55;
arr3[1] = true;
arr3[2] = "Thiago Alves";
console.log(arr3);

// Inserindos dados no array criado já com dados
let arr4 = ["Thiago, 22, true"];
arr4.push(33, "Alves");
console.log(arr4);

// Inserindo dados no array criado já com dados - Spread Operator (ES6)
let arr5 = ["A", "B"];
let arr6 = [...arr5, "C", "D"];
console.log(arr6);

// Concatenando arrays
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers);

let data = ["Thiago", 26, true];
let moreData = ["Paulo", 15, false];
data.push(...moreData);
console.log(data);
