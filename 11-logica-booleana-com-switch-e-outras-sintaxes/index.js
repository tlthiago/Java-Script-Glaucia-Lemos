const x = 0;
const y = null;
const z = undefined;
const w = "";

console.log(Boolean(x));
console.log(Boolean(y));
console.log(Boolean(z));
console.log(Boolean(w));

if (!x) console.log("x possui um valor");
else console.log("x NÃO possui um valor");

const name1 = "Thiago";
if (name1 === "Thiago") {
  console.log("Os valores são os mesmos");
} else {
  console.log("Os valores não são os mesmos");
}

// LocaleCompare
const name2 = "thiago";
console.log(name2.localeCompare("Thiago"));
// Retorna negativo se eles não forem equivalentes
// Retorna valor positivo se eles forem equivalentes

const status1 = 500;
if (status1 === 200) {
    console.log("OK!");
} else if (status1 === 400 && status1 === 500) {
    console.log("Error!");
} else {
    console.log("Sem status");
}

const status2 = 200;
switch (status2) {
    case 200:
        console.log("OK!");
    break;

    case 400:

    case 500:
        console.log("Error!");
    break;
    
    default:
        console.log("Unknown value");
    break;
}