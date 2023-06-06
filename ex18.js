const prompt = require('prompt-sync')({ sigint: true});
function quant(A){
    console.log(A.length);
}
function caracteres(A){
    console.log(A.indexOf('a') +1);
    console.log(A.indexOf('o') +1);
}
let texto = String(prompt(`Digite uma frase:`));
quant(texto);
caracteres(texto);