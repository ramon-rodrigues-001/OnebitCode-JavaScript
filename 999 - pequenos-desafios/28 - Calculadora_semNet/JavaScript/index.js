import { mudarTema } from "./entities/mudarTema.js"
import { fazerCalculos } from "./entities/fazerCalculos.js"
import { addTeclado } from "./entities/fazerCalculos.js"

document.querySelector('#mudarTema').addEventListener('click', ()=> {
    mudarTema()
})


document.querySelectorAll('.tecla').forEach(elemento => {
    elemento.addEventListener('click', (ev)=> {
        const evento = ev.currentTarget
        fazerCalculos(evento)
    })
})



document.querySelector('#tela').addEventListener('keydown', addTeclado)