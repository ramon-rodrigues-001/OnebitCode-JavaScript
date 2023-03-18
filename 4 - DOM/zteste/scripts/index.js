import { add } from "./criando-elementos.js";
import { acionar } from "./manipulando-atributos.js"
import { evento } from "./eventos.js"
import { pedir } from "./formulario.js";

document.querySelector('button#chamada_add').addEventListener('click', () => {
    add()
})

let btns = document.querySelectorAll('.btns').forEach(element => {
    element.addEventListener('click', (e) => {
        let element_clicado = e.currentTarget

        acionar(element_clicado)
    })
});


document.querySelector('#input_submit').addEventListener('click', (e)=> {
    e.preventDefault()
    let element_pai = e.currentTarget.parentNode
    evento(element_pai)
})


document.querySelector('#pedir').addEventListener('click', (e2)=> {
    e2.preventDefault()
    let element = e2.currentTarget.parentNode

    pedir(element)
})