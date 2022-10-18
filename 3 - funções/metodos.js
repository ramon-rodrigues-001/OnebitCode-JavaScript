// Uma metodo é uma função dentro de um objeto tipo Console.log, O log é uma função dentro do objeto console 

let obj = {
    nome: 'Ramon',
    idade: 18,
    dizerOlar() {
        console.log(`Ola ${this.nome}`)
    }
}

console.log(obj)
obj.dizerOlar()