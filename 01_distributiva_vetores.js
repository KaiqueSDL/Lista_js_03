const entrada = require("prompt-sync")({sigint:true});


//  Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída. 




console.log("Programa ira fazer uma distributiva !!");


var vetor = [];

for(var i = 0; i <= 4; i++){
    vetor[i] = parseInt(entrada("Digite o seu - " , i , " numero: "));
    console.log(vetor[i]);

}


