/* Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela. */



class PessoasNo{ // Criação de classe para ser cada nó da lista.
    constructor (nome, idade){
        this.nome = nome
        this.idade = idade
        this.filho = null
    }
}

class ListaPessoas{ 
    constructor(){
        this.primeiro = null 
    }

    addLast(nome, idade){ 
        let novaPessoa = new PessoasNo(nome, idade)

        if (!this.primeiro){
            this.primeiro = novaPessoa
        } else { 
            let atual = this.primeiro 
            while (atual.filho){ 
                atual = atual.filho 
            }
            atual.filho = novaPessoa 
        } 
    }
}


let informacoesPessoas = new ListaPessoas()

informacoesPessoas.addLast("Hyunjin", 52)
informacoesPessoas.addLast("Jeongin", 48)
informacoesPessoas.addLast("Ruby", 12)
informacoesPessoas.addLast("Kkomi", 4)