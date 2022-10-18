// COMMUN
function chamada1(parametro1, parametro2) {
    return parametro1 + parametro2
}
console.log(chamada1(5, 8))



// EM UMA VARIAVEL E SEM NAME [Anonima]
let chamada2 = function (parametro1, parametro2) {
    return parametro1 + parametro2
}
console.log(chamada2(5, 8))



// SEM NAME E ABREVIADO [Anonima]
let chamada3 = (parametro1, parametro2) => parametro1 + parametro2
console.log(chamada3(5, 8))