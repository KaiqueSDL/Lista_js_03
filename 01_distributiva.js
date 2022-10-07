const entrada = require('prompt-sync')({sigint:true});


//  Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída. 


console.log("O programa ira realizar uma distributiva");


var a,b,c,d;

a = parseFloat(entrada("Digite o seu valor A: "));
b = parseFloat(entrada("Digite o seu valor B: "));
c = parseFloat(entrada("Digite o seu valor C: "));
d = parseFloat(entrada("Digite o seu valor D: "));

console.log("----------------------------------");
console.log("O valor da soma e mutiplicação de A com B, respectivamente é: " , (a+b), " - - ", (a*b));
console.log("O valor da soma e mutiplicação de A com C, respectivamente é: " , (a+c), " - - ", (a*c));
console.log("O valor da soma e mutiplicação de A com D, respectivamente é: " , (a+d), " - - ", (a*d));

console.log("O valor da soma e mutiplicação de B com C, respectivamente é: " , (b+c), " - - ", (b*c));
console.log("O valor da soma e mutiplicação de B com D, respectivamente é: " , (b+d), " - - ", (b*d));


console.log("O valor da soma e mutiplicação de C com D, respectivamente é: " , (c+d), " - - ", (c*d));




