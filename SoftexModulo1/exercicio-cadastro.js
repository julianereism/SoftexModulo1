/*Elabore um algoritmo que representa um cadastro. Ele deve ler os seguintes dados fornecidos pelo usuário:

- Nome
- Endereço
- Cidade
- CPF
- RG
- Idade
- Nome do pai
- Nome da mãe
- Peso
- Renda bruta

Apresente as informações solicitadas no final do cadastro.*/


let nome = prompt("Digite seu nome:")
let endereco = prompt("Digite seu endereço:")
let cidade = prompt("Digite sua cidade:")
let cpf = prompt("Digite seu CPF:")
let rg = prompt("Digite seu RG:")
let idade = parseInt(prompt("Digite sua idade:"))
let nomePai = prompt("Digite o nome do seu pai:")
let nomeMae = prompt("Digite o nome da sua mãe")
let peso = parseFloat(prompt("Digite seu peso:"))
let rendaBruta = parseFloat(prompt("Digite sua renda bruta:"))

console.log("Nome:", nome)
console.log("Endereço:", endereco)
console.log("Cidade", cidade)
console.log("CPF:", cpf)
console.log("RG:", rg)
console.log("Idade:", idade)
console.log("Nome do pai:", nomePai)
console.log("Nome da mãe:", nomeMae)
console.log("Peso:", peso)
console.log("Renda Bruta:", rendaBruta)
