const array1 = ["A", true, 2];
console.log(array1.push("novo"));
console.log(array1);
console.log(array1.pop());
console.log(array1);

const array2 = ["A", true, 2];
console.log(array2.unshift("Valor"));
console.log(array2);
console.log(array2.shift());
console.log(array2);

const array3 = ["A", true, 2];
const array4 = ["B", false, 1];
let newArray = array3.concat(array4);
let newArray2 = array4.concat([1, 2, 3]);
console.log(newArray);
console.log(newArray2);
