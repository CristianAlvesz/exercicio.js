//solicitar um número e verificar se ele é primo usando for
const prompt = require('prompt-sync')({ sigint: true});
var n1 = prompt ("Digite: ");
var conta = 0;
for (i=1; i<=n1; i++){
    if(n1 % i == 0){
        conta = conta+1;
    }
}
if(conta==2){
    console.log('É primo.');
}else{
    console.log('Não é primo.');
}