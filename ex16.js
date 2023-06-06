const prompt = require('prompt-sync')({ sigint: true});
function maca(){
    console.log(`\nNão vendemos essa fruta aqui.`)
}function kiwi(){
    console.log(`\nEstamos com escassez de kiwis`)
}function melancia(){
    console.log(`\nAqui está, são 3 reais o quilo.`)
}function errada(){
    console.log(`\nFruta errada`)
}console.log(`\n************************TEMOS TRÊS FRUTAS, ESCOLHA ENTRE MAÇÃ, KIWI OU MELANCIA E USE ''SAIR'' PARA PARAR O PROGRAMA************************\n`);
while(true){
let fruta = String(prompt(`Escolha sua fruta: `));
if(fruta === 'sair'){
    console.log(`\nObrigado por me usar!\n`)
    break;
}
else if(fruta === 'kiwi' || fruta === 'Kiwi'){
    kiwi()
}
else if(fruta === 'Maca' || fruta === 'maca'){
    maca()
}
else if(fruta === 'melancia' || fruta === 'Melancia'){
    melancia()
}else{
    errada()
    } console.log(`\n-------------------------------------------------------------\n`)
}