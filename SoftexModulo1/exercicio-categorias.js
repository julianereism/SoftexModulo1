

let questao1 = prompt("Tem 4 rodas?")
let questao2 = prompt("Tem 2 rodas?")
let questao3 = prompt("Tem pedal?")
let questao4 = prompt("Tem motor?")

if (questao2 == "sim" && questao3 == "sim") {
    console.log("É uma bicicleta.")

} else if (questao2 == "sim" && questao4 == "sim") {
    console.log("É uma moto.")

} else {
    console.log("É um trator.")
}