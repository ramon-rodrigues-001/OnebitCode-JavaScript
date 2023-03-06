import { addTela } from "./addTela.js";

document.querySelectorAll('.btns').forEach(e => {
    e.addEventListener('click', (elemento)=> {
        let elementoClicado = elemento.currentTarget
        addTela(elementoClicado.dataset.tecla)
    })
})