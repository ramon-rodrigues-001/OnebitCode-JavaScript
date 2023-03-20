const obj = {
    nome: 'Ramon',
    idade: '18y',
    sex: 'Masculino',
    parent: ['Dalva', 'Pedro', 'Davi']
}

const {nome, idade, sex, parent} = obj
const [mae, pai, irmao] = parent


function createUser(nome, idade, sex, mae, pai, irmao) {
    let id = Math.floor(Math.random() * 9999)

    return {
        id,
        nome,
        idade,
        sex,
        mae,
        pai,
        irmao
    }
}

console.log(createUser(nome, idade, sex, mae, pai, irmao))