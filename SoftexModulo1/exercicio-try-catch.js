/*function calculateAge(anoNascimento) {
    const currentYear = new Date().getFullYear();
    return currentYear - anoNascimento;
}*/

function calculoIdade(anoCorrente, anoNascimento) {
    return anoCorrente - anoNascimento
}

let nomeCompleto = prompt("Digite seu nome completo:")

while (true) {

    try {
        let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento (entre 1992 e 2021):"))
        let anoCorrente = 2023
        let resultado = calculoIdade () 

        if (anoNascimento >= 1992 && anoNascimento <= 2021){
            alert(`${nomeCompleto}, você tem ${resultado} anos.`)
            break;
    }
 } catch(error) {
        alert("Entrada inválida." + error);
    }
}
