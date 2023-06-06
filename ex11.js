const prompt = require("prompt-sync")({ sigint: true});
let numeros=0
console.log('********************************************');
console.log('Palpiteiro da mega senna');
console.log('********************************************');
for (i=1; i<=6; i++){
let Aleatorio = Math.floor(Math.random()*60);
numeros = Number(prompt(`\n${i} número: ${Aleatorio}`))
}