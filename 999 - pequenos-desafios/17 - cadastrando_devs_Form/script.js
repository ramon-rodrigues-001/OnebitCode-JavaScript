function criarLabel(htmlfor, text) {
    const label = document.createElement('label')
    label.htmlFor = htmlfor
    label.innerText = text
    return label
}

function criarInput(Id, Value, Name, Type = 'text') {
    const input = document.createElement('input')
    input.id = Id
    input.value = Value
    input.name = Name
    input.type = Type
    return input
}

let numeroDeRepeticoes = 0

const addtech = document.getElementById('adicionar')
addtech.addEventListener('click', (evento)=>{

    // Pegando o elemento ul HTML
    const habilidades_ul = document.getElementById('habilidades')
    // Criando [li]
    const li = document.createElement('li')
    li.id = `li${numeroDeRepeticoes}`


    // Criando campo de nome da feramenta
    const labelFerramenta = criarLabel('iferramenta', 'Nome da Linguagem: ')
    const inputFerramenta = criarInput('iferramenta', '', 'ferramenta')
    inputFerramenta.id = `nomeFerramenta${numeroDeRepeticoes}`

    // Add campo de nome da ferramenta a [li]
    li.appendChild(labelFerramenta); li.appendChild(inputFerramenta)


    const labelTetalheExperiencia = criarLabel('', ' Experiencia: ')

    const labelRadio1 = criarLabel(`iradio1${numeroDeRepeticoes}`, '0-2 Anos')
    const labelRadio2 = criarLabel(`iradio2${numeroDeRepeticoes}`, '3-4 Anos')
    const labelRadio3 = criarLabel(`iradio3${numeroDeRepeticoes}`, '5+ Anos ')

    const inputRadio1 = criarInput(`iradio1${numeroDeRepeticoes}`, '0-2 Anos', `radio${numeroDeRepeticoes}`, 'radio')
    const inputRadio2 = criarInput(`iradio2${numeroDeRepeticoes}`, '3-4 Anos', `radio${numeroDeRepeticoes}`, 'radio')
    const inputRadio3 = criarInput(`iradio3${numeroDeRepeticoes}`, '5+ Anos', `radio${numeroDeRepeticoes}`, 'radio')


    // Removendo habilidades
    let btnRemoverHabilidade = document.createElement('button')
    btnRemoverHabilidade.type = 'button'
    btnRemoverHabilidade.innerText = 'Remover Habilidade'
    btnRemoverHabilidade.addEventListener('click', (butao)=>{
        let removerLi = butao.currentTarget.parentNode
        habilidades_ul.removeChild(removerLi)
    })


    li.appendChild(labelTetalheExperiencia)
    li.append(inputRadio1, labelRadio1)
    li.append(inputRadio2, labelRadio2)
    li.append(inputRadio3, labelRadio3)
    li.appendChild(btnRemoverHabilidade)

    habilidades_ul.appendChild(li)
    
    numeroDeRepeticoes += 1
})


let developers = []
let submitDeveloper = document.getElementById('submit')
submitDeveloper.addEventListener('click', (evento)=>{
    evento.preventDefault()

    let numDeLi = document.getElementsByTagName('li').length

    let nome = document.getElementById('name').value
    let radio = []

    for (let i = numDeLi - 1; i>=0; i--) {
        if (document.querySelector(`#li${i} > input[type="radio"]:checked`) !== null) {

            var nomeDaHabilidade = document.querySelector(`li#li${i} > input`).value
            var experiencia = document.querySelector(`li#li${i} > input[type="radio"]:checked`).value

            radio.push({nomeDaHabilidade, experiencia})
        }
        else(
            alert('Campo não preenchido')
        )
    }

    console.log({nome, radio})
    radio = []
    nome.value = ''
    nomeDaHabilidade.value = ''
})

// pode ser util
// parametro.preventDefault()

// parametro.currentTarget.parentNode
// evento.children.iname.value