const prompt = require('prompt-sync')({ sigint: true});
let n1 = prompt('Digite uma palavra: ');
for(let i=0; i<=n1.length; i++){
    console.log(n1[i]);
}