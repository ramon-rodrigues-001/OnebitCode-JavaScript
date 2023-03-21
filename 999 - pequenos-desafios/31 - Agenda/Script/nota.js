export class Notas {
    constructor(titulo, texto) {
        this.main = document.querySelector('#main_notas')
        this.titulo = titulo
        this.texto = texto
    }

    criar() {
        const div = document.createElement('div')
        div.style.backgroundColor = '#d6d2d2'
        div.style.width = '300px'
        div.style.height = '300px'
        div.style.textAlign = 'center'
        div.style.borderRadius = '5px'
        div.style.boxShadow = '2px 2px 2px rgba(0, 0, 0, 0.28)'

        const h1 = document.createElement('h1')
        h1.innerText = this.titulo

        const p = document.createElement('p')
        p.innerText = this.texto


        div.appendChild(h1)
        div.appendChild(p)
        this.main.appendChild(div)
    }
}

// position: relative;
//         background-color: rgb(214, 210, 210);
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;