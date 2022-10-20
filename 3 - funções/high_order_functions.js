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
// ESTE METODO SERVE PARA PEGAR TODOS OS ELEMENTOS COMO NOME DE UM ARRAY, E COLOCAR EM OUTRO ARRAY
let nomes = persona.map((mapeamento1) => mapeamento1.Nome)
console.log(nomes)


// Utilizando metodo [FILTER]
// ESTE METODO SERVE PARA SELECIONAR ELEMENTOS COM DETERMMINADO VALOR
let humanos = persona.filter((mapeamento2) => mapeamento2.Class === 'Humano')
console.log(humanos)


// Utilizando metodo [REDUCE]
// ESTE TETODO SERVE PARA SOMAR OU SEPARAR UM DETERMINADO ELEMENTO EM ARRAYS DIFERENTES ORGANIZANDO-O
let organização = persona.reduce((valorAcumulado, parametro2) => {
    if (valorAcumulado[parametro2.Class]) {
        valorAcumulado[parametro2.Class].push(parametro2)
    }
    else {
        valorAcumulado[parametro2.Class] = [parametro2]
    }
    
    return valorAcumulado
}, {})
console.log(organização)


// Utilizando metodo [FOREACH]
// PARA CADA ELEMENTO DETRO DE UM ARRAY ELE VAI DEVOLVER O ELEMENTO O INDICE E O ARRAY COMPLETO
persona.forEach((elemento, indice) => {
    console.log(
        elemento,
        indice
    )
})
