import { Notas } from "./nota.js"

let storage = []
document.querySelector('#confirm').addEventListener('click', ()=> {
    let title = document.querySelector('#title').value
    let text = document.querySelector('#text').value
    const newBloco = new Notas(title, text)
    storage.push(newBloco)
    newBloco.criar()


    const index = window.localStorage.length
    window.localStorage.setItem(index, storage)
    alert(index)

    window.localStorage.getItem(index).array.forEach(element => {
        console.log(element)
    })
})

