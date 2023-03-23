import { Notas } from "./nota.js"

const main = document.querySelector('#main_notas')
let index = window.localStorage.length

document.querySelector('#confirm').addEventListener('click', ()=> {
    let title = document.querySelector('#title').value
    let text = document.querySelector('#text').value
    let i = 0
    const newBloco = new Notas(title, text)
    console.log(newBloco)
    newBloco.criar()

    main.classList.remove('inicio')
    
    index = window.localStorage.length
    window.localStorage.setItem(index, `${newBloco.titulo}&${newBloco.texto}`)
    alert('Nota Salva')
    

    i++
})


if (main.classList.value === 'inicio') {
    let i = 0
    while (index > i) {
        let localStorage = window.localStorage.getItem(i).split('&')
        console.log(localStorage[0], localStorage[1])
        const newBloco = new Notas(localStorage[0], localStorage[1])
        newBloco.criar()
        i++
    }
}