import { Notas } from "./nota.js"

document.querySelector('#confirm').addEventListener('click', ()=> {
    let title = document.querySelector('#title').value
    let text = document.querySelector('#text').value
    const newBloco = new Notas(title, text)
    newBloco.criar()
})