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
    console.log(parametro)
}
let obj = {
    nome: 'Ramon',
    idade: 18,
    sexo: 'Masculino',
    prof: 'Developer',
    numero: 1124442
}
objComoParametro(obj)