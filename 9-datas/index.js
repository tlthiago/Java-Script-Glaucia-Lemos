const agora = new Date();
console.log(agora);

const ahora = new Date(2023, 6, 14, 16, 7, 34);
console.log(ahora);

console.log(new Date(2050, 0, 9));

ahora.setFullYear(2800);
ahora.setMonth(5);
ahora.setHours(8, 43);
console.log(ahora);

const minhaData = new Date();
const m = minhaData.getMonth();
const y = minhaData.getFullYear();
const d = minhaData.getDay();
console.log(d, "/", m, "/", y);