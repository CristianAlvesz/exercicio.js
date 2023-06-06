const prompt = require("prompt-sync")({ sigint: true});
let num = Number(prompt("Digite um número:"));
let sequencia = [];

// Inicializando os primeiros números da sequência
let a = 0;
let b = 1;

// Adicionando os primeiros números à sequência
sequencia.push(a);
sequencia.push(b);

while (b <= num) {
  let temp = a + b;
  if (temp <= num) {
    sequencia.push(temp);
  }
  a = b;
  b = temp;
}

console.log("Sequência de Fibonacci até", num, ":");
console.log(sequencia);