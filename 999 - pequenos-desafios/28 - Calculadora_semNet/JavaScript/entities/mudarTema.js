export function mudarTema() {
    const container = document.querySelector('#container')
    container.classList.toggle('dark')
    container.classList.toggle('litht')

    const btnMudarTema = document.querySelector('#mudarTema')
    btnMudarTema.classList.toggle('btn-outline-light')
    btnMudarTema.classList.toggle('btn-outline-secondary')
}