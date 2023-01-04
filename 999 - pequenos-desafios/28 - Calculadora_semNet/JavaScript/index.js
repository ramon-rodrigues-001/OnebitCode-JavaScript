import { mudarTema } from "./entities/mudarTema.js"
import { fazerCalculos } from "./entities/fazerCalculos.js"
import { addTeclado } from "./entities/fazerCalculos.js"
import { copy } from "./entities/copy.js"

// ======== MUDAR TEMA ESCURO / CLARO =======
document.querySelector('#mudarTema').addEventListener('click', ()=> {
    mudarTema()
})


// ======== VAZENDO CALCULOS ATRAVEZ DOS BUTÕES ========
document.querySelectorAll('.tecla').forEach(elemento => {
    elemento.addEventListener('click', (ev)=> {
        const evento = ev.currentTarget
        fazerCalculos(evento)
    })
})


// ====== FAZENDO CALCULO PELO TECLADO ========
const tela = document.querySelector('#tela')
tela.addEventListener('keydown', addTeclado)


// ======== SISTEMA DE COPY ========
document.querySelector('#btnCopy').addEventListener('click', copy)