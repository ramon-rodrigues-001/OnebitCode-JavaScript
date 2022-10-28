let quantasVezes = 0
lista_de_Habilidades = []

const addHabilidade = document.getElementById('adicionar')
addHabilidade.addEventListener('click', (evento) => {
    evento.preventDefault()

    let habilidade = document.getElementById('habilidades')
    let lista_li = document.createElement('li')
    lista_li.id = `item${quantasVezes}`

    let labelFeramenta = document.createElement('label')
    labelFeramenta.for = 'feramenta'
    labelFeramenta.innerText = 'Ferramenta: '

    let feramenta = document.createElement('input')
    feramenta.type = 'text'
    feramenta.id = 'feramenta'

    labelFeramenta.appendChild(feramenta)
    lista_li.appendChild(labelFeramenta)


    
    let labelExperiencia1 = document.createElement('label')
    let labelExperiencia2 = document.createElement('label')
    let labelExperiencia3 = document.createElement('label')

    let experiencia1 = document.createElement('input')
    let experiencia2 = document.createElement('input')
    let experiencia3 = document.createElement('input')
    experiencia1.type = 'radio'
    experiencia2.type = 'radio'
    experiencia3.type = 'radio'
    experiencia1.name = 'inputRadio' + quantasVezes
    experiencia2.name = 'inputRadio' + quantasVezes
    experiencia3.name = 'inputRadio' + quantasVezes
    experiencia1.id = '2Anos'
    experiencia1.id = '3Anos'
    experiencia1.id = '5Anos'
    experiencia1.value = '0-2 Anos'
    experiencia2.value = '3-4 Anos'
    experiencia3.value = '5+ Anos'

    labelExperiencia1.appendChild(experiencia1)
    labelExperiencia2.appendChild(experiencia2)
    labelExperiencia3.appendChild(experiencia3)
    labelExperiencia1.innerHTML += '0-2 Anos' + quantasVezes
    labelExperiencia2.innerHTML += '3-4 Anos' + quantasVezes
    labelExperiencia3.innerHTML += '5+ Anos' + quantasVezes


    let removerHabilidade = document.createElement('button')
    removerHabilidade.innerText = 'Remover Habilidade'
    removerHabilidade.id = 'remover' + quantasVezes
    removerHabilidade.addEventListener('click', (evento2) => {
        let removerLi = evento2.currentTarget.parentNode
        document.querySelector('ul#habilidades').removeChild(removerLi)
    })


    lista_li.innerHTML += ' - Experiencia: '
    lista_li.appendChild(labelExperiencia1)
    lista_li.appendChild(labelExperiencia2)
    lista_li.appendChild(labelExperiencia3)
    lista_li.innerHTML += ' - '
    lista_li.appendChild(removerHabilidade)

    habilidade.appendChild(lista_li)


    let submit = document.getElementById('submit')
    submit.addEventListener('click', (evento) => {
        evento.preventDefault()
        let nome = document.getElementById('name').value
        let feramenta = document.getElementById('feramenta')

        let radiosObj = document.querySelector(`input[type="radio"]:checked`).value
        console.log(radiosObj)
    })

    
    quantasVezes++
})


