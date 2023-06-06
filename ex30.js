const prompt = require('prompt-sync')({ sigint: true});
let n1 = Number(prompt(`Digite um número: `))
for(i=0; i<=n1; i=i+2){
    console.log(i)
}