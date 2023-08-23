/*Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário.
 O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a
  seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem
 “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. 
Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado.*/


function calculadora() {
    while (true) {
        console.log("Operações:");
        console.log("1: Soma");
        console.log("2: Subtração");
        console.log("3: Multiplicação");
        console.log("4: Divisão");
        console.log("0: Sair");

        const operacao = parseInt(prompt("Digite o número equivalente a operação desejada:"));

        if (operacao === 0) {
            console.log("Deslogando da calculadora.");
            break;
        } else if (operacao >= 1 && operacao <= 4) {
            const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
            const valor2 = parseFloat(prompt("Digite o segundo valor:"));
    
            let resultado;
            
            switch (operacao) {
                case 1:
                    resultado = valor1 + valor2;
                    console.log(`Resultado: ${resultado}`);
                    break;
                case 2:
                    resultado = valor1 - valor2;
                    console.log(`Resultado: ${resultado}`);
                    break;
                case 3:
                    resultado = valor1 * valor2;
                    console.log(`Resultado: ${resultado}`);
                    break;
                case 4:
                    if (valor2 !== 0) {
                        resultado = valor1 / valor2;
                        console.log(`Resultado: ${resultado}`);
                    } else {
                        console.log("Não é possível dividir por zero.");
                    }
                    break;
            }
        } else {
            console.log("Essa opção não existe.");
        }
    }
}

calculadora();