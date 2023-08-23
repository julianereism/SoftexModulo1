/* Desenvolva um código, utilizando o Google Blockly, que utilize as seguintes características de um veículo:
- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
A: Veículos com duas ou três rodas;
B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
E: Veículos com quatro rodas ou mais e com mais de 6000 kg.
*/

let qtRodas = parseInt(prompt("Digite a quantidade de rodas do veículo:"))
let peso = parseFloat(prompt("Digite o peso bruto em KG:"))
let pessoas = parseInt(prompt("Digite a quantidade de pessoas:"))

if (qtRodas == 2 || qtRodas == 3) {
    console.log("Categoria A.")
    
} else if (qtRodas == 4 && peso <= 3500 && pessoas <= 8){
    console.log("Categoria B.")

} else if (peso >= 3500 && peso <= 6000 && qtRodas >= 4) {
    console.log("Categoria C.")

} else if (qtRodas >= 4 && pessoas >8) {
    console.log("Categoria D.")

} else if (qtRodas >= 4 && peso > 6000) {
    console.log("Categoria D.")

} else {
    console.log("Categoria não válida.")
}




   

