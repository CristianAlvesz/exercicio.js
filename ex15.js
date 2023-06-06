//pescar acima de 20 kg de peixe paga imposto de 5 reais por kg que passou os 20 kg
//solicitar que o usuario digite quantos kg pescou
//verificar atraves de uma função se paga imposto e calcular o valor a pagar e mostrar na tela
//caso não pague imposto, digitar na tela ''obrigado pela visita''
const prompt = require('prompt-sync')({ sigint: true});
let kg=0
let taxa=0
function taxas(A){
    let imposto = (A-20)*5
    return imposto;
}
let kilos = Number(prompt(`Quantos kg você pescou?: `));
if(kilos > 20){
    taxas(kilos)
console.log(`O valor a ser pago é de ${taxas(kilos)}`)
}if(kilos <= 20){
    console.log(`Obrigado pela visita!`);
}