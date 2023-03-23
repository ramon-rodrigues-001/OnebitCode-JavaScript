import { Notas } from "./nota.js"
let i = 0
document.querySelector('#confirm').addEventListener('click', ()=> {
    let title = document.querySelector('#title').value
    let text = document.querySelector('#text').value
    const newBloco = new Notas(title, text)
    console.log(Notas.titulo)
    newBloco.criar()


    const index = window.localStorage.length
    window.localStorage.setItem(index, `${Notas.titulo} ${Notas.texto}`)
    alert(index)
    

    while (index > i) {
        console.log(window.localStorage.getItem(index))
        i++
    }
})

