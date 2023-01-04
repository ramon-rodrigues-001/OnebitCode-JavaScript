export function copy(ev) {
    const telaResult = document.querySelector('#resultado')
    const copy = ev.currentTarget

    if (copy.innerText === 'Copy') {
        copy.innerText = 'Copied'
        copy.classList.add('copied')
        telaResult.style.borderRadius = '10px'
        window.navigator.clipboard.writeText(telaResult.value)
    }
    else {
        copy.innerText = 'Copy'
        copy.classList.remove('copied')
        telaResult.style.borderRadius = '0px 10px 10px 0px'
    }
}