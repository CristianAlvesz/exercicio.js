
const prompt = require('prompt-sync')({ sigint: true});
let pct15=0
let pct60=0
let idades=0
let ate15=0
let de16a30=0
let de31a45=0
let de46a60=0
let acimade60=0
for(var contador=1; contador<=10; contador++){
    idades=Number(prompt('Digite as idades das pessoas: '));

if(idades>=0 && idades<=15){
    ate15=ate15+1
    }if(idades>=16 && idades<=30){
        de16a30=de16a30+1
    }if(idades>=31 && idades<=45){
        de31a45=de31a45+1
    }if(idades>=46 && idades<=60){
        de46a60=de46a60+1
    }if(idades>60){
        acimade60=acimade60+1
    }if(idades === ' '){
console.log('\nIdade inválida.\n')
    }else{
        console.log(`\nIdade inválida.\n`)
            break;
    }
console.log('\n------------------------------------------\n');
console.log(`    Há ${ate15} pessoas com até 15 anos\n
    Há ${de16a30} pessoas de 16 a 30 anos\n
    Há ${de31a45} pessoas de 31 a 45 anos\n
    Há ${de46a60} pessoas de 46 a 60 anos\n
    Há ${acimade60} pessoas com acima de 60 anos`);
    console.log('\n------------------------------------------\n');
//porcentagem
pct15=ate15/10*100
pct60=acimade60/10*100
console.log(`A porcentagem de pessoas com até 15 anos é de ${pct15}% e a porcentagem de pessoas com mais de 60 é de ${pct60}%\n`);
console.log('------------------------------------------------------------------------------------\n');
}