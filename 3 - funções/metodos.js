let obj = {
    nome: 'Ramon',
    idade: 18,
    dizerOlar() {
        console.log(`Ola ${this.nome}`)
    }
}

console.log(obj)
obj.dizerOlar()