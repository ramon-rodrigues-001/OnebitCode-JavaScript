export class MudarBackground {
    constructor (elementos, elementClicado) {
        this.elementos = elementos
        this.elementClicado = elementClicado
    }

    mudar() {
        this.elementos.forEach((e)=> {
            e.classList.remove('ativo')
        })

        this.elementClicado.classList.add('ativo')

        const section_1 = document.querySelector('#section-1')
        section_1.style.transition = '.5s'
        section_1.style.backgroundImage = `url(${this.elementClicado.dataset.url})`
        
    }
}