/*Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. 
Ao terminar, imprima novamente todas as informações das três listas.*/

let nomes = ['juliane', 'leticia', 'hyunjin', 'chan', 'changbin', 'jisung', 'leeknow', 'felix', 'jeongin', 'seungmin']
let idades = [27, 16, 23, 25, 24, 23, 23, 23, 22, 22]
let cores = ['vermelho', 'roxo', 'azul', 'preto', 'preto', 'verde', 'amarelo', 'rosa', 'laranja', 'cinza']

console.log(nomes)
console.log(idades)
console.log(cores)

idades.pop()
cores.pop()
idades.push(23)
cores.push('lilas')

console.log(nomes)
console.log(idades)
console.log(cores)