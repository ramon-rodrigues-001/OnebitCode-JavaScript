const teclas = document.querySelectorAll('.teclas')
import { addTeclaNaTela, apagarDigitoDatela } from './models/tela.js'

teclas.forEach(teclas => {
    teclas.addEventListener('click', tecla => {
        addTeclaNaTela(tecla.currentTarget.getAttribute('data-valor'))
    })
})

document.querySelector('#apagar').addEventListener('click', () => {
    apagarDigitoDatela()
})