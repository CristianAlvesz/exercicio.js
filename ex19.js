const prompt = require('prompt-sync')({ sigint: true});
function inverter(palavra){
var qtd = frase.length;
console.log(qtd);
var invertida = "";
for(var i=qtd-1;i>=0; i=i-1){

    var caractere = frase.charAt(i);
    invertida = invertida + caractere;
}
console.log(invertida);
}

var frase = prompt("Digite uma String: ");
inverter(frase);