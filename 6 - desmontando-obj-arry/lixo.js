 const obj = {
    nome: 'Ramon',
    idade: '18y',
    job: 'Developer',
    parent: ['Dalva', 'Pedro', 'Davi']
}

const {nome, idade, job} = obj
console.log(nome, idade, job)

const [mae, pai, irmao] = obj.parent
console.log(mae, pai, irmao)