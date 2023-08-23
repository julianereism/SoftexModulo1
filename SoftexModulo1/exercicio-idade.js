/*Construa um algoritmo que declare as seguintes variáveis: nome, idade, altura e maior_de_idade.

Depois, atribua valores para essas variáveis, sabendo que a variável nome é uma string, 
a variável idade é um inteiro, a variável altura é um float e a variável maior_de_idade é um booleano.

No final, imprima os valores das variáveis.*/


let nome = prompt("Digite seu nome:")
let idade = parseInt(prompt("Digite sua idade:"))
let altura = parseFloat(prompt("Digite sua altura:"))
let maior_de_idade = true

console.log("Seu nome é", nome)
console.log("Sua idade é:", idade)
console.log("Sua altura é:", altura)

if (maior_de_idade == true) {
    console.log("Você é maior de idade.")
} else {
    console.log("Você é menor de idade.")
}
