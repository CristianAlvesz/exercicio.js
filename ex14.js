const prompt = require('prompt-sync')({ sigint: true});
function soma (A,B){
    return A+B
}
function multiplicar (A,B){
    return A*B
}
function dividir (A,B){
    return A/B
}
function subtrair (A,B){
    return A-B
}
let numero = Number(prompt(`Digite um número: `));
let numero2 = Number(prompt(`Digite outro número: `));
let somaOuMult = Number(prompt('Digite o número 1 para soma, número 2 para multiplicar, número 3 para dividir ou número 4 para subtrair: '));
var resposta = soma(numero,numero2);
var resposta2 = multiplicar(numero,numero2);
var resposta3 = dividir(numero,numero2);
var resposta4 = subtrair(numero,numero2);
if(somaOuMult === 1){
    console.log(`A soma entre esses números deu ${resposta}`);
}else if(somaOuMult === 2){
    console.log(`A multiplicação entre esses números deu ${resposta2}`);
}else if(somaOuMult === 3){
    console.log(`A divisão entre esses números deu ${resposta3}`);
}else if(somaOuMult === 4){
    console.log(`A subtração entre esses números deu ${resposta4}`);
}else{
    console.log(`Operação inválida.`);
}