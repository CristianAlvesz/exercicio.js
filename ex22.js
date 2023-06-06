//escreva um programa que solicite ao usuario um numero
//exiba a soma de todos os numeros impares ate esse numero utilizando um loop for.
const prompt = require('prompt-sync')({ sigint: true});
let impar=0
let par=0
let numero=0
for(let i=1; i<=10; i++){
    numero = Number(prompt(`Digite o ${i} número: `));
    if (numero % 2 == 0){
        par=par+i
    }else if(numero % 3 == 1){
        impar=impar+i
    }else if(numero === "sair"){
        break;
    }
}
console.log(impar,par);