export function addTela(elemento) {
    const tela = document.querySelector('#tela')
    const resultado = document.querySelector('#resultado')

    if (elemento === 'C') {
        tela.value = ''
        resultado.value = ''
    }
    else if (elemento === '=') {
        try {
            let valor = eval(tela.value)
            resultado.value = valor
        }
        catch {
            resultado.value = 'Error'
        }
    }
    else {
        tela.value += elemento
    }
}