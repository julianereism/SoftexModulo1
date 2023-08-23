/*Desenvolva um programa que utiliza o nome de um aluno, duas notas e a quantidade de faltas que ele teve. 
Conclua se o aluno está aprovado ou reprovado de acordo com as especificações:
 
- Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
- Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado;
Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.

No sistema, todos os valores devem estar armazenados em variáveis.*/


let nome_aluno = "Hyunjin"
let nota1 = 10
let nota2 = 8
let faltas = 2

let media = ((nota1 + nota2) / 2)
if (media >= 7) {
    console.log("Aluno aprovado!")
} else if (faltas >= 3) {
    console.log("Aluno reprovado!")
} else {
    ("Aluno reprovado!")
}
