// Declaração de Promise
const promiseDemo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise demo");
    resolve(10);
  }, 1 * 1000);
});

const promiseDemo2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise demo 2");
    resolve(20);
  }, 1 * 1000);
});

promiseDemo
  .then((res) => {
    // throw new Error("Falhou aqui");
    console.log(res);
    return Promise.resolve(res + 50);
  })
  .then((res) => {
    console.log("Segunda promessa:", res);
    return Promise.resolve(res);
  })
  .catch((error) => {
    console.log("Deu ruim!!!", error);
  }
);

// Promise race - Executa a promisse mais rápida
Promise.race([promiseDemo, promiseDemo2])
  .then((value) => console.log(`Resolved: ${value}`))
  .catch((reason) => console.log(`Rejected: ${reason}`)
);

// Promise All - Execução simultanea de promises
Promise.all([promiseDemo, promiseDemo2])
  .then((nums) => console.log("OK!", nums))
  .catch((e) => console.log("ERRO!", e.message));
