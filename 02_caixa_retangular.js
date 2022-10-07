const entrada = require ('prompt-sync')({sigint:true});

//) Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula VOLUME=COMPRIMENTO * LARGURA * ALTURA. 


var comprimeto, largura, altura;

comprimeto = parseFloat(entrada("Digite o comprimento da peça: "));
largura = parseFloat(entrada("Digite a largura da peça: "));
altura = parseFloat(entrada("Digite a altura da peça: "));

console.log("O volume da sua peça é: " , (comprimeto*largura*altura), " metros cubicos");