// Mudar tema
document.getElementById('mudarTema').addEventListener('click', ()=>{
    document.body.classList.toggle('is-dark')
    document.body.classList.toggle('is-white')
})

let tela = document.getElementById('tela')
let telaDeResult = document.getElementById('telaDeResposta')
telaDeResult.setAttribute('disabled', !telaDeResult.disabled)
const allowedKeys = ['(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '-', '%']

let calculo = []

// Adicionando atraves do input
tela.addEventListener('keydown', (evInput)=>{
    evInput.preventDefault()

    if (allowedKeys.includes(evInput.key)) {
        tela.value += evInput.key
        calculo.push(evInput.key)
    }
})

// Adicionando atraves dos butões
document.querySelectorAll('.teclas').forEach((elButton)=>{
    elButton.addEventListener('click', (evento)=>{

        let elementoAcionado = evento.currentTarget

        if (elementoAcionado.value === 'apagar') {
            tela.value = tela.value.slice(0, -1)
            telaDeResult = ''
            calculo.pop()
        }
        else if (elementoAcionado.value === 'igual') {
            efetuarCalculo()
        }
        else {
            tela.value += `${elementoAcionado.value}`
            calculo.push(elementoAcionado.value)
        }
    })
})

function efetuarCalculo() {
    alert('efetuando')
}