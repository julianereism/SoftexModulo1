/*Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. 
Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. 
Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, 
a quantidade de votos de cada candidato, os brancos e nulos.*/



let candidato_Hyunjin = 0;
let candidato_Changbin = 0;
let candidato_Jisung = 0;
let branco = 0;
let nulo = 0;


function exibirResultado() {
    console.log("Resultado da eleição:");
    console.log(`Candidato Hyunjin: ${candidato_Hyunjin} votos`);
    console.log(`Candidato Changbin: ${candidato_Changbin} votos`);
    console.log(`Candidato Jisung: ${candidato_Jisung} votos`);
    console.log(`Votos em branco: ${branco}`);
    console.log(`Votos nulos: ${nulo}`);

    if (candidato_Hyunjin > candidato_Changbin && candidato_Hyunjin > candidato_Jisung) {
        console.log("Candidato Hyunjin é o vencedor!");
    } else if (candidato_Changbin > candidato_Hyunjin && candidato_Changbin > candidato_Jisung) {
        console.log("Candidato Changbin é o vencedor!");
    } else if (candidato_Jisung > candidato_Hyunjin && candidato_Jisung > candidato_Changbin) {
        console.log("Candidato Z é o vencedor!");
    } else {
        console.log("A eleição terminou em empate ou não houve votos válidos suficientes.");
    }
}

function iniciarVotacao() {
    while (true) {
        const voto = prompt("Digite o número do candidato (Hyunjin: 889, Changbin: 847, Jisung: 515) ou 'branco' para voto em branco. Digite 'sair' para finalizar a votação:");

        if (voto === "sair") {
            break;
        }

        if (isNaN(voto)) {
            console.log("Por favor, digite um número válido ou 'branco'.");
            continue;
        }

        const votoNum = parseInt(voto);

        if (votoNum === 889) {
            candidato_X++;
        } else if (votoNum === 847) {
            candidato_Y++;
        } else if (votoNum === 515) {
            candidato_Z++;
        } else if (votoNum === 0) {
            branco++;
        } else {
            nulo++;
        }
    }

    exibirResultado();
}

iniciarVotacao();