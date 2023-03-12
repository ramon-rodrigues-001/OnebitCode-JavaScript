import { MudarBackground } from "./MudarBackground.js";

let elementos = document.querySelectorAll('img.circles')

elementos.forEach(element => {
    element.addEventListener('click', (E) => {
        let elementClicado = E.currentTarget

        const section_1 = new MudarBackground(elementos, elementClicado)
        section_1.mudar()
    })
});
