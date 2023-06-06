const prompt = require('prompt-sync')({ sigint: true});
let contador = 0
let n1 = Number(prompt(`Digite um número: `));
while(contador<=n1){
if(contador % 2 === 0){
    console.log(contador)
    }
    contador++;
}