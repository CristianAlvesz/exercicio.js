const prompt = require('prompt-sync')({ sigint: true});
function comprimento(Raio){
var comp = 2*3.14*Raio
console.log(`O comprimento da pista é: ${comp}`);
}
console.log(`Pista de corrida`);
var raio = Number(prompt(`Digite o Raio: `));
comprimento(raio);