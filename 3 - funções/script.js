// first ilustração commum
function digaOla(name = 'Mundo') {
    return `Ola ${name}!`
}
console.log(digaOla('Ramon'))



// Two somando Number
function soma(n1=0, n2=0) {
    return `O valor da soma entre ${n1} + ${n2} = ${n1+n2}`
}
console.log(soma(5, 8))



// 3 criando object 
function creating(nome, idade, sexo) {
    return usuario = {
        nome: nome,
        idade: idade,
        sexo: sexo
    }
}
console.log(creating('Ramon', 18, 'Masculino'))



// Objeto ou Array como parametro
function objComoParametro(parametro) {
    return (parametro)
}
let obj = {
    nome: 'Ramon',
    idade: 18,
    sexo: 'Masculino',
    prof: 'Developer',
    numero: 1124442
}
console.log (objComoParametro(obj))



// Mais de um retorn
function idade(i) {
    if (i >= 18) {
        return 'Maior de idade'
    }
    else {
        return 'Menor de idade'
    }
}
let maioridade = idade(19)
console.log(maioridade)


// function com outro function, Tem como mais estou com pregiça de fazer c é mais experiente faz você.
