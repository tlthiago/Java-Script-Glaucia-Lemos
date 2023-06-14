//throw "Meu erro";
//throw 45;

let erroEncontrado = null;

try {
    let obj = undefined;
    console.log(obg);
    console.log(obj.propriedade);
    console.log("Olá Mundo!");
    erroEncontrado = false;
} catch (erro) {
    console.log("[Erro]");
    console.log(erro);
    erroEncontrado = true;
} finally {
    erroEncontrado = null;
    console.log("Finalizar software.");
}

console.log(erroEncontrado);