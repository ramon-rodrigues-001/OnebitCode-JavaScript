// Mudando de cor de forma simples [esta forma adiciona estylo inline por isso sobresai sobre outras formas de estilo]
function dark() {
    alert('Tema escuro ATIVADO')
    document.body.style.color = "white"
    document.body.style.backgroundColor = "black"
}
function white() {
    alert('Tema claro ATIVADO')
    document.body.style.color = "black"
    document.body.style.backgroundColor = "white"
}


// Mudando de forma mais pretica
function dynamics() {
    document.body.classList.toggle('is-dark')
    document.body.classList.toggle('is-white')
}
