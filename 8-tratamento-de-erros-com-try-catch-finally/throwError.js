i = 0;

while (i < 3) {
    try {
        console.log("Iniciando calculadora.");
        let input = 0;
        if (input === 0) {
        throw "Valor negado";
        }
        let res = 5 / input;
    } catch (e) {
        i++;
    } finally {
        console.log("Finalizando a calculadora\n");
    }
}
