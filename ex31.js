const prompt = require('prompt-sync')({ sigint: true});
for(let i=0; )
let frase = String(prompt(`Digite uma frase: `));
let letra = String(prompt(`Digite a letra desejada: `));
console.log(`A letra ${letra.toUpperCase()} aparece ${letra.length + letra.toUpperCase()} vezes.`);