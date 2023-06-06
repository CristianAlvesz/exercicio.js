//crie um algoritmo para eleição onde tem os candidatos 1,2,3
//solicite 15 votos e mostre quantos votos teve cada candidato da seguinte forma
/*candidato 1 - 3 votos
  candidato 2 - 8 votos
  candidato 3 - 3 votos
  */
const prompt = require('prompt-sync')({ sigint: true});
let escolhas=[candidato1,candidato2,candidato3]
let cand1=0 
let cand2=0
let cand3=0
console.log(`\n---------------------Vote de 1 a 3 para os cadidatos---------------------\n`)
for(var i=1; i<=15; i++){
    let votos = Number(prompt(`Qual o seu ${i} voto: `));
    if(votos === 1){
        cand1=cand1+1
    }else if(votos === 2){
        cand2=cand2+1
    }else if(votos === 3){
        cand3=cand3+1
    }else{
        console.log(`Número inválido.`)
        break;
    }
    escolhas.push[cand1]
    escolhas.push[cand2]
    escolhas.push[cand3]
    
}