const prompt = require('prompt-sync')({ sigint: true});
let n1 = Number(prompt(`Deseja a tabuada de qual número: `));
for(let i=1; i<=10; i++){
    let tabuada = i*n1
    console.log(`${i}x${n1}=${tabuada}`);
}