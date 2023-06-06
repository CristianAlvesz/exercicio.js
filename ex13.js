const prompt = require('prompt-sync')({ sigint: true});
console.log("*************************************************");
console.log("Par ou Impar");
console.log("*************************************************");
let par = 0;
let impar = 0;
let numeros = 0;
for(let i=1; i<=10; i++){
    numeros = Number(prompt(`${i} número: `))
if (numeros % 2 == 0){
    par=par+1
}else{
    impar=impar+1
    }
}
console.log(`Números par: ${par}`);
console.log(`Números Impares: ${impar}`);
