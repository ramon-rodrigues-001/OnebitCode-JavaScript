// Uma função que chama a mesma função novamente como uma repetição

// ilustração 1
function num(numero) {
    if (numero > 0) {
        console.log(numero)
        num(numero - 1)
    }
}
num(10)


// ilustração 2 fatorial
function fatorial(fato) {
    if (fato === 0 || fato === 1) {
        return 1
    }
    else {
        return fato * fatorial(fato-1)
    }
}
console.log(fatorial(5))
