/* Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações,
qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado? */




let filaNumeros = [3, 7, 9, 1, 0]

function desenfileirarNumeros() { 
    return filaNumeros.shift()
}

console.log(desenfileirarNumeros(filaNumeros)) 
console.log(filaNumeros)


console.log(desenfileirarNumeros(filaNumeros)) 
console.log(filaNumeros) 

console.log(desenfileirarNumeros(filaNumeros)) 
console.log(filaNumeros) 

console.log(desenfileirarNumeros(filaNumeros)) 
console.log(filaNumeros) 

console.log(desenfileirarNumeros(filaNumeros)) 
console.log(filaNumeros) 



let listaNumeros = [3, 7, 9, 1, 0]

function remocaoNumeros(numero) { 
    let indiceLista = listaNumeros.indexOf(numero) 
    if (indiceLista !== -1) { 
        listaNumeros.splice(indiceLista, 1) 
        return true
    } else {
        return false 
    }
}

console.log(remocaoNumeros(3)) 
console.log(listaNumeros) 

remocaoNumeros(7)
console.log(listaNumeros) 

remocaoNumeros(9)
console.log(listaNumeros) 

console.log(remocaoNumeros(4)) 
console.log(listaNumeros) 

remocaoNumeros(1)
console.log(listaNumeros) 

remocaoNumeros(0)
console.log(listaNumeros) 




let pilhaNumeros = [0, 1, 9, 7, 3]

function desempilharNumeros(){ 
    return pilhaNumeros.pop()
}

console.log(desempilharNumeros(pilhaNumeros)) 
console.log(pilhaNumeros) 

console.log(desempilharNumeros(pilhaNumeros)) 
console.log(pilhaNumeros) 

console.log(desempilharNumeros(pilhaNumeros)) 
console.log(pilhaNumeros) 

console.log(desempilharNumeros(pilhaNumeros)) 
console.log(pilhaNumeros) 

console.log(desempilharNumeros(pilhaNumeros)) 
console.log(pilhaNumeros) 