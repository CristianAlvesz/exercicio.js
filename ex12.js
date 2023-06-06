const prompt = require("prompt-sync")({ sigint: true});
let soma=0
console.log('******************************************');
console.log(' SOLICITE 10 NÚMEROS ')
console.log('******************************************');
for(i=1;i<=10;i++){
    let numeros = Number(prompt(`${i} número: `));
    if(numeros>=50 && numeros<=60){
    soma = soma + 1
    }
}
console.log(`${soma} números estão entre 50 e 60`);