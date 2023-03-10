let elementos = document.querySelectorAll('img.circles')

elementos.forEach(element => {
    element.addEventListener('click', (E) => {
        let elementClicado = E.currentTarget

        funcao(elementos, elementClicado)
    })
});




function funcao(elementos, elementClicado) {
    elementos.forEach((e)=> {
        e.classList.remove('ativo')
    })

    elementClicado.classList.add('ativo')

    const section_1 = document.querySelector('#section-1')

    section_1.style.backgroundImage = `url(${elementClicado.dataset.url})`

    console.log(elementClicado.dataset.url)
}