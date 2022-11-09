const obj = {
    nome: 'Ramon',
    idade: '18y',
    job: 'Developer',
    parent: ['Dalva', 'Pedro', 'Davi']
}

// const nome = obj.nome
// Para trabalhar com Obj basta colocar entre as cochetes o key dos elementos não precisa ser em ordem

const { nome } = obj

const {idade, job, parent} = obj

console.log(nome, idade, job)

// Para trabalhar com Array deve criar o nome das variaveis sempre respeitando a ordem dos elementos

const [mae, pai, irmao] = parent

console.log(mae, pai, irmao)


// Tambem tem como utilizar desestruturação com  uma Function
// Pasando como parametro as variaveis criadas com outras desestruturação
function createUser({nome, idade, job}) {
    let id = Math.floor(Math.random() * 9999)

    return {
        id,
        nome,
        idade,
        job
    }
}
console.log(createUser(obj))