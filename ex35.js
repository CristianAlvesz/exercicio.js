const prompt = require("prompt-sync")({ sigint: true});
let base = Number(prompt(`Digite quanto mede a base: `));
let altura = Number(prompt(`Digite quanto mede a altura: `))
function area(a,b){
    let areaDoTriangulo = a*b/2
    console.log(`A área do triangulo é: ${areaDoTriangulo}`);
}
area(base,altura);