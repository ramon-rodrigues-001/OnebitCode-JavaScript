import { add } from "./criando-elementos.js";
import { acionar } from "./manipulando-atributos.js"
import { evento } from "./eventos.js"
import { pedir } from "./formulario.js";

// Addicionar inputs no Body
document.querySelector('button#chamada_add').addEventListener('click', () => {
    add()
})

// Eventos mudando um input
let btns = document.querySelectorAll('.btns').forEach(element => {
    element.addEventListener('click', (e) => {
        let element_clicado = e.currentTarget

        acionar(element_clicado)
    })
});


// Login
document.querySelector('#input_submit').addEventListener('click', (e)=> {
    e.preventDefault()
    let element_pai = e.currentTarget.parentNode
    evento(element_pai)
})

// Pedido em um formulario
document.querySelector('#pedir').addEventListener('click', (e2)=> {
    e2.preventDefault()
    let element = e2.currentTarget.parentNode

    pedir(element)
})