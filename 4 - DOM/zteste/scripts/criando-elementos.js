export function add() {
    let ul = document.querySelector('ul#lista')

    let li = document.createElement('li')
    li.innerText = 'New imput: '

    let input = document.createElement('input')
    input.type = 'text'

    li.appendChild(input)
    ul.appendChild(li)
}