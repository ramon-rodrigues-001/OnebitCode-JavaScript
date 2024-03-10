// Login elements
const login = document.querySelector('.login')
const loginForm = login.querySelector('form__login')
const loginInput = login.querySelector('.input__login')


// Chat elements
const chat = document.querySelector('.chat')
const chatForm = chat.querySelector('chat__form')
const chatInput = chat.querySelector('.chat__input')
const chatMenssages = chat.querySelector('.chat__menssages')


let websocket

const user = { id: '', name: '', color: '' }

const colors = [
    '#184e4f',
    '#1e184f',
    '#4f1d18',
    '#690101',
    '#003302'
]
const randowColor = () => {
    const getRandowColor = Math.floor(Math.random() * colors.length)
    return colors[getRandowColor]
}

const scrollAutomatico = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
}

const createMensagemSelfElement = (content) => {
    const div = document.createElement('div')
    div.classList.add('message__self')
    div.innerHTML = content
    return div
}

const createMensagemOtherElement = (sender, senderColor, content) => {
    const span = document.createElement('span')
    span.classList.add('msg__sender')
    span.innerHTML = sender
    span.style.color = senderColor

    const div = document.createElement('div')
    div.classList.add('mensagem__other')
    div.appendChild(span)
    div.innerHTML += content

    return div
}

const processMessage = ({ data }) => {
    const {userID, userName, userColor, content} = JSON.parse(data)
    
    userID === user.id ? 
    chatMenssages.appendChild(createMensagemSelfElement(content)) :
    chatMenssages.appendChild(createMensagemOtherElement(userName, userColor, content))

    scrollAutomatico()
}

const handleLogin = (event) => {
    event.preventDefault()

    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = randowColor()

    console.log(user)

    login.style.display = 'none'
    chat.style.display = 'flex'

    websocket = new WebSocket('ws://localhost:8080')
    // websocket.onopen = () => websocket.send(`${user.name} entrou no chat.`)

    websocket.onmessage = processMessage
}

login.addEventListener('submit', handleLogin)






const handleMensagem = (event) => {
    event.preventDefault()

    const mensagem = {
        userID: user.id,
        userName: user.name,
        userColor: user.color,
        content: chatInput.value
    }

    websocket.send(JSON.stringify(mensagem))

    chatInput.value = ''
}

chat.addEventListener('submit', handleMensagem)