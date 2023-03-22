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


// Configuração do titulo do bloco com limitador de texto
        const h1 = document.createElement('h1')
        let letras_title = ''
        if (this.titulo.length > 8) {
            let i = 0
            while (i <= 6) {
                letras_title += [...this.titulo[i]]
                i++
            }
            console.log(letras_title)
            h1.innerText = letras_title + '...'
        }
        else {
            h1.innerText = this.titulo
        }


// Configurando Data e Hora
        const data = document.createElement('h4')
        data.innerText = new Date().getDate() + ' / '
        if (new Date().getMonth()+1 < 10) {
            data.innerText += '0' + new Date().getMonth() + ' / '
        }
        else {
            data.innerText += new Date().getMonth() + ' / '
        }
        data.innerText += new Date().getFullYear()

        const hora = document.createElement('p')
        if (new Date().getHours < 10) {
            hora.innerText = '0' + new Date().getHours() + ':'
        }
        else {
            hora.innerText = new Date().getHours() + ':'
        }
        if (new Date().getMinutes < 10) {
            hora.innerText += '0' + new Date().getMinutes()
        }
        else {
            hora.innerText += new Date().getMinutes()
        }



        
// Configuração do texto do bloco com limitador de texto
        const p = document.createElement('p')
        let letras_text = ''
        if (this.texto.length > 73) {
            let i = 0
            while (i <= 73) {
                letras_text += [...this.texto[i]]
                i++
            }
            console.log(letras_text)
            p.innerText = letras_text + '...'
        }
        else {
            p.innerText = this.texto
        }



// Criando o graus de importancia
        const p_label = document.createElement('p')
        p_label.innerText = 'Importancia: '
        p_label.style.display = 'inline'
        
        const label_1 = document.createElement('label')
        label_1.innerText = '1°'
        label_1.style.marginLeft = '10px'
        const input_1 = document.createElement('input')
        input_1.type = 'radio'
        input_1.id = 'radio_1'
        input_1.name = 'importancia'

        const label_2 = document.createElement('label')
        label_2.innerText = '2°'
        label_2.style.marginLeft = '10px'
        const input_2 = document.createElement('input')
        input_2.type = 'radio'
        input_1.id = 'radio_2'
        input_2.name = 'importancia'

        const label_3 = document.createElement('label')
        label_3.innerText = '3°'
        label_3.style.marginLeft = '10px'
        const input_3 = document.createElement('input')
        input_3.type = 'radio'
        input_1.id = 'radio_3'
        input_3.name = 'importancia'
        



// Adicionando os elementos no bloco [div]
        div.appendChild(h1)
        div.appendChild(data)
        div.appendChild(hora)
        div.appendChild(p)

        div.appendChild(p_label)
        div.appendChild(label_1)
        div.appendChild(input_1)
        div.appendChild(label_2)
        div.appendChild(input_2)
        div.appendChild(label_3)
        div.appendChild(input_3)

// Adicionando o bloco [div] no main
        this.main.appendChild(div)
    }
}