// É QUANDO PASSA UM PARAMETRO COM A CHAMADA DE OUTRA FUNÇÃO QUE PEGA OS DADOS DA PRIMEIRA E UTILIZA COMO PARAMETRO, ALGO ASSIM!


// MOSTRANDO ELEMENTOS DE UMA LISTA
function mostrarElemento(elemento, indice, array) {
    console.log({
        elemento: elemento,
        indice: indice,
        array: array
    })
}
let arr = ['Maça', 'Laranja', 'Melão', 'Uva'] 

for (let i = 0; i<arr.length; i++) {
    mostrarElemento(arr[i], i, arr)
}
/*======= OU arr.forEach =======*/  arr.forEach(mostrarElemento)


// Adicionando uma lista de objetos em uma lista de string
let persona = [
    {Nome: 'Ramon', Class: 'Humano', Nivel: 99},
    {Nome: 'koss', Class: 'Ogro', Nivel: 45},
    {Nome: 'kellis', Class: 'Ogro', Nivel: 58},
    {Nome: 'Robin', Class: 'Meio-Humano', Nivel: 87},
    {Nome: 'Layane', Class: 'Humano', Nivel: 13},
    {Nome: 'Is', Class: 'Elfo', Nivel: 58},
]

// Utilizando metodo [MAP]
let nomes = persona.map((mapeamento1) => mapeamento1.Nome)
console.log(nomes)

// Utilizando metodo [FILTER]
let humanos = persona.filter((mapeamento2) => mapeamento2.Class === 'Humano')
console.log(humanos)


// Utilizando metodo [REDUCE]
let organização = persona.reduce((valorAcumulado, parametro2) => {
    if (valorAcumulado[parametro2.Class]) {
        valorAcumulado[parametro2.Class]
    }
    else {
        valorAcumulado[parametro2.Class] = parametro2
    }
    
    return valorAcumulado
}, {})
console.log(organização)