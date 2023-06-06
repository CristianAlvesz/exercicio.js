const prompt = require('prompt-sync')({ sigint: true});
function escada(palavra){
    var qtd = frase.length;
    console.log(qtd);

    for(var i=0; i<=qtd; i=i+1){

        var caractere = frase.substr(0,i);
        console.log(caractere.toUpperCase());
    }

}

var frase = prompt("Digite uma String: ");
escada(frase);