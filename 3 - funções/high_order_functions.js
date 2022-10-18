// É QUANDO PASSA UM PARAMETRO COM A CHAMADA DE OUTRA FUNÇÃO QUE PEGA OS DADOS DA PRIMEIRA E UTILIZA COMO PARAMETRO, ALGO ASSIM!

function chamadaDeNivelMaior(n1, comecar) {
    comecar(n1)
}
let repeticao = (num) => {
    if (num > 0) {
        console.log(num)
        repeticao(num - 1)
    }
}
chamadaDeNivelMaior(10, repeticao)



// SEGUNDA TENTATIVA

function chamadaMaior(n1, n2, somar) {
    somar(n1, n2)
}

chamadaMaior(5, 5, function (num1, num2) {
    console.log(num1 + num2)
})



// MOSTRANDO ELEMENTOS DE UMA LISTA [FORMA MANUAL]
function mostrarElemento(elemento, indice, array) {
    let obj = {
        elemento: elemento,
        indice: indice,
        array: array
    }
    console.log(obj)
    
}

let arr = ['Maça', 'Laranja', 'Melão', 'Uva'] 

for (let i = 0; i<arr.length; i++) {
    mostrarElemento(arr[i], i, arr)
}

//=======OU  arr.forEach(mostrarElemento) =======//