// Negação
const active = true;
if (!active) {
  console.log("IF!");
} else {
  console.log("Else!");
}

const status1 = 400;
if (status1 === 200) {
  console.log("OK!");
} else if (status1 === 400) {
  console.log("Error!");
} else {
  console.log("Unknown status");
}

const status2 = 400;
if (status2 === 200) console.log("OK!");
else if (status2 === 400) console.log("Error!");
else console.log("Unknown status");

const status3 = 300;
const message = status3 === 200 ? "OK" : "Error!";
console.log(message);

// Igualdade entre strings
const name1 = "Diego";
if (name1 === "diego") {
  console.log("IF!");
} else {
  console.log("Else!");
}
// O JS é case sensitive

// Igualdade entre números
const name2 = "42";
if (name2 === 42) {
    console.log("IF!");
} else {
    console.log("Else!");
}

// && - ||
const status4 = 400;
const active2 = false;
if (status4 === 200 && active === true) {
    console.log("IF!");
} else {
    console.log("Else!");
}

// Menor, maior, maior igual, menor igual, diferente
const num1 = 200;
if (num1 != 300) {
    console.log("IF!");
} else {
    console.log("Else!");
}