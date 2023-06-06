const prompt = require('prompt-sync')({ sigint: true});

//COMENTARIOS DO ALGORITMO
console.log();
console.log('**********************************************');
console.log('CRISTIAN ALVES PEREIRA');
console.log('ANO: 2023');
console.log('**********************************************');
console.log();

let qtd_mais_90 = 0;
let media = 0;
let total_idades = 0;
//PROCESSAMENTO
for(let i=1; i<=7; i=i + 1){
    let kg_atual = Number(prompt('Digite seu Peso: '));
        if(kg_atual > 90){
            qtd_mais_90 = qtd_mais_90 + 1; //CONTADOR
                }
            let idade_atual = Number(prompt('Digite sua idade: '));
        total_idades = total_idades + idade_atual;
    console.log('**********************************************')
}
//MÉDIA
media = total_idades/7;
//RESPOSTA
console.log(`Soma das Idades ${total_idades} com média de idades de ${media} total de pessoas com mais de 90kg são ${qtd_mais_90} `)