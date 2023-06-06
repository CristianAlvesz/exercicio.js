const prompt = require("prompt-sync")({ sigint: true});
console.log("*******************************************************");
let valorMaximo = Number(prompt("Digite até qual valor que eu posso gerar: "));
console.log("*******************************************************");
for (var i = 1; i<=10; i++) {
    //Gerando um numero aleatório entre 0 e 100
    console.log("*******************************************************");
    console.log(`Adivinhe o numero que escolhi entre 0 e ${valorMaximo}`);
    console.log(`Você tem 10 tentativas para acertar`);
    console.log("*******************************************************");
    let numeroGerado = Math.floor(Math.random() * valorMaximo);

    //Mostra na tela o número gerado
    console.log(`Número Gerado ${i}: ${numeroGerado}`);
}
console.log("*******************************************************");