import { add } from "./criando-elementos.js";
import { acionar } from "./manipulando-atributos.js"

document.querySelector('button#chamada_add').addEventListener('click', () => {
    add()
})

let btns = document.querySelectorAll('.btns').forEach(element => {
    element.addEventListener('click', (e) => {
        let element_clicado = e.currentTarget

        acionar(element_clicado)
    })
});


function confirm_1(parametro) {
    console.log(parametro)
}