// Mudar tema
document.getElementById('mudarTema').addEventListener('click', ()=>{
    document.body.classList.toggle('is-dark')
    document.body.classList.toggle('is-white')
})

let tela = document.getElementById('tela')
tela.setAttribute('disabled', !tela.disabled)
let telaDeResult = document.getElementById('telaDeResposta')
telaDeResult.setAttribute('disabled', !telaDeResult.disabled)
const allowedKeys = [' ( ', ' ) ', ' / ', '7', '8', '9', ' * ', '4', '5', '6', ' - ', '1', '2', '3', ' + ', '0', ' - ', ' % ']

let calculo = []

document.querySelectorAll('.teclas').forEach((el)=>{
    el.addEventListener('click', (evento)=>{

        let elementoAcionado = evento.currentTarget

        if (elementoAcionado.value === 'apagar') {
            tela.value = ''
            telaDeResult = ''
            calculo = []
        }
        else if (elementoAcionado.value === 'igual') {
            efetuarCalculo()
        }
        else if (allowedKeys.indexOf(elementoAcionado.value) > -1) {
            tela.value += `${elementoAcionado.value}`
            calculo.push(elementoAcionado.value)
        }
        else (
            alert('Apenas numero')
        )
    })
})

function efetuarCalculo() {
    alert('efetuando')
}