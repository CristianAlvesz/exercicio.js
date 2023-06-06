//foram fornecidos os numeros de canal 4,5,7,12 e o numero de pessoas que estavam assistindo aquele canal
//se a tv tivesse desligada, nada era anotado, entao a casa nao entrava na pesquisa
//ler o numero do canal e a quantidade de pessoas que estavam assistindo
//calcular a porcentagem de audiencia de cada canal
//para para encerrar a entrada de dados digitar o numero ZERO
const prompt = require('prompt-sync')({ sigint: true});
let canal_4=0
let canal_5=0
let canal_7=0
let canal_12=0
let total_pessoas=0;
while(true){
    let canal = prompt('Digite o Canal que está ligado: ');
    if(canal === '0'){0
        break; //parar o sistema e sai
    }
    if (canal != '4' && canal != '5' && canal != '7' && canal != '12'){
        console.log('Digitou Canal Inválido, tente outro');
        console.log('*******************************************');
        continue; //ele volta no inicio
    }else{
        //pega a qtd de pessoas
        var qtd_pessoas = Number(prompt('Digite a quantidade de pessoas: '));
        //acumulando a quantidade de pessoas que foram pesquisadas
        total_pessoas = total_pessoas + qtd_pessoas;
    }
    if(canal === '4'){
        canal_4 = canal_4 + qtd_pessoas;
    }else if (canal === '5'){
        canal_5 = canal_5 + qtd_pessoas;
    }else if (canal === '7'){
        canal_7 = canal_7 + qtd_pessoas;
    }else{
        canal_12 = canal_12 + qtd_pessoas;
    }
    console.log('**************************************************');
}
//Respostas dos canais
console.log('**************************************************');
//toFixed(2) - Número de casas decimais desejadas
console.log(`
Vendo o canal 4: ${((canal_4 / total_pessoas)*100).toFixed(2)}%`
);
console.log(`
Vendo o canal 5: ${((canal_5 / total_pessoas)*100).toFixed(2)}%`
);
console.log(`
Vendo o canal 7: ${((canal_7 / total_pessoas)*100).toFixed(2)}%`
);
console.log(`
Vendo o canal 12: ${((canal_12 / total_pessoas)*100).toFixed(2)}%`
);
    console.log(`O total de entrevistados foi de : ${total_pessoas}`);
    console.log('**************************************************');