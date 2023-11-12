const tela = document.querySelector('.inputTela')
const telaResultado = document.querySelector('.inputResultado')


document.querySelectorAll('.buttons').forEach(element => {
    element.addEventListener('click', (event)=> {
        const valor = event.currentTarget.value
        tela.value += valor

        mudarBtnCopia()
    })
})


function apagarUm() {
    tela.value = tela.value.slice(0, -1)
}


function calcular() {
    try {
        if (tela.value === '') {
            telaResultado.value = 'Calcule algo'
        }
        else {
            telaResultado.value = eval(tela.value)
        }
    }
    catch {
        telaResultado.value = 'Error'
    }
}


const btnCopy = document.querySelector(".copy")
function copiar() {
    btnCopy.innerHTML = 'COPYED'
    window.navigator.clipboard.writeText(telaResultado.value)
}

function mudarBtnCopia() {
    btnCopy.innerHTML = 'COPY'
}