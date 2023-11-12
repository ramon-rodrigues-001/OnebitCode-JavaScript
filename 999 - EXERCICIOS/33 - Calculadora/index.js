const tela = document.querySelector('.inputTela')
const telaResultado = document.querySelector('.inputResultado')


document.querySelectorAll('.buttons').forEach(element => {
    element.addEventListener('click', (event)=> {
        const valor = event.currentTarget.value
        tela.value += valor
    })
})


function apagarUm() {
    tela.value = tela.value.slice(0, -1)
}