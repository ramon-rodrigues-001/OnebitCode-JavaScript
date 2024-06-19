const inputTela = document.querySelector('#tela')

const teclasPossiveis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', '*', '/']

export const addTeclaNaTela = (valorTecla)=> {
    if (!valorTecla in teclasPossiveis) {
        alert('tecla indisponivel')
    }
    inputTela.value += valorTecla
}

// Verefica se a tecla do do teclado fisico existe no "teclasPossiveis" e adiciona no input
inputTela.addEventListener('keydown', tecladoFisico => {
    if (!teclasPossiveis.includes(tecladoFisico.key)) {
        tecladoFisico.preventDefault()
    }
})

export const apagarDigitoDatela = () => {
    inputTela.value = inputTela.value.slice(0, -1)
}