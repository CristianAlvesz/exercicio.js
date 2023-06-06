/*Calcular a media de 3 notas dos alunos de uma classe*/
//Ler as notas e mostrar a media do aluno
//Encerrar quando uma nota negativa for igual a -1
const prompt = require('prompt-sync')({ sigint: true});
let media_aritmetica=0
let total=0
let nota1=0
let nota2=0
let nota3=0
while(true){
    nota1 = Number(prompt('Digite sua primeira nota: '))
    nota2 = Number(prompt('Digite sua segunda nota: '))
    nota3 = Number(prompt('Digite sua terceira nota: '))
total=nota1+nota2+nota3
media_aritmetica=total/3
console.log(`A média de suas notas é ${media_aritmetica}`);
if((nota1||nota2||nota3)<0){
    break;
    }
}