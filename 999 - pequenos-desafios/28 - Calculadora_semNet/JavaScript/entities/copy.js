export function copy(ev) {
    const telaResult = document.querySelector('#resultado')
    const copy = ev.currentTarget

    if (copy.innerText === 'Copy') {
        copy.innerText = 'Copied'
        window.navigator.clipboard.writeText(telaResult.value)
    }
    else {
        copy.innerText = 'Copy'
    }
}