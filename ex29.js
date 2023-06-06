const prompt = require('prompt-sync')({ sigint: true});
let n1 = Number(prompt(`Digite um número: `));
let contador = 1
let tempo = 0
let sequencia = 0
console.log(contador)
while(contador<=n1){
    sequencia = tempo + contador
    tempo = contador
    contador = sequencia
    if(sequencia>n1){
        break;
    }
    console.log(sequencia);
}