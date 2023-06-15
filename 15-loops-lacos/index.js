const nomes = ["Thiago", "Paulo", "Alexandro"];
const data = [
  { name: "Thiago", active: true },
  { name: "Paulo", active: true },
  { name: "Alexandro", active: true },
];

// While
let index = 0;
while (index < nomes.length) {
  const nome = nomes[index];
  console.log(nome);
  index++;
}

let index1 = 0;
while (index1 < data.length) {
  const value = data[index1];
  console.log(value.name);
  index1++;
}

// For
for (let index = 0; index < nomes.length; index++) {
  const nome = nomes[index];
  console.log(nome);
}

for (let index = 0; index < data.length; index++) {
  const value = data[index];
  console.log(value);
}

// For OF
for (let nome of nomes) {
    console.log(nome);
}

for (let value of data) {
    console.log(value);
}