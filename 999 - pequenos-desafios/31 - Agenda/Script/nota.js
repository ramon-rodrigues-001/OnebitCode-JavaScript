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
        div.style.padding = '10px'
        div.style.overflow = 'hidden'

        const data = document.createElement('h4')
        data.innerText = new Date().getDate() + ' / '
        if (new Date().getMonth()+1 < 10) {
            data.innerText += '0' + new Date().getMonth() + ' / '
        }
        else {
            data.innerText += new Date().getMonth() + ' / '
        }
        data.innerText += new Date().getFullYear()

        const h1 = document.createElement('h1')
        if (this.titulo.lengft > 8) {
            h1.innerText = this.titulo.fo
        }
        h1.innerText = this.titulo

        const p = document.createElement('p')
        p.innerText = this.texto

        let tetttt = 'Rap do Roy Mustang (Fullmetal Alchemist) | Alquimista das Chamas | Enygma 71'

        div.appendChild(h1)
        div.appendChild(data)
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