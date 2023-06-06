function escreverFraseAoContrario(frase) {
    var palavras = frase.split(); // Divide a frase em um array de palavras
    var palavrasInvertidas = palavras.reverse(); // Inverte a ordem das palavras no array
    var fraseInvertida = palavrasInvertidas.join(" "); // Junta as palavras invertidas em uma frase novamente
    return fraseInvertida;
  }
  
  var fraseOriginal = "Eu gosto de programação";
  console.log(escreverFraseAoContrario(fraseOriginal));