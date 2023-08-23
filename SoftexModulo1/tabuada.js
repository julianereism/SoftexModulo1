/* Um aluno do ensino fundamental precisa fazer como tarefa de casa a tabuada de alguns números inteiros, 
como nos exemplos em anexo.

Para ajudar esse aluno, você deve elaborar um algoritmo que solicite que seja digitado um número inteiro 
e que no final imprima o resultado da tabuada desse número.*/


let numero = parseInt(prompt("Digite um numero inteiro positivo:"));

if (isNaN(numero)) {
    console.log("Atenção: Digite apenas números!")
}

console.log("Tabuada do " + numero + ":");

for (var i = 1; i <= 100; i++) {
    var resultado = numero * i
    console.log(numero + " x " + i + " = " + resultado);
}