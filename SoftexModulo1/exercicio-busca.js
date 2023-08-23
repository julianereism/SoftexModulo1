/* Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array. */




    let numerosSemSequencia= [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]

    function buscaNumero(array, numeroBuscado) { 
        for (let i = 0; i < array.length; i++) { 
            if (array[i] === numeroBuscado){
                return i 
            }
            
        }
        return -1 
    }
    
    console.log(buscaNumero(numerosSemSequencia, 20)) 
