// Utilizando o Session Store
// Este metodo serve para salvar uma informação enquanto o cliente esta navegando
function salvarSession() {
    const inputSession = document.getElementById('session')
    window.sessionStorage.setItem('info1', inputSession.value)
    inputSession.value = ''
    alert('Informação Salva...')
}
function lerSession() {
    const ler = window.sessionStorage.getItem('info1')
    alert('Informação do Session Store é: ' + ler)
}


// Utilizando o Local Store
// Este metodo serve para salvar uma informação mesmo quando o cliente fechar o navegador
function salvarLocal() {
    const inputLocal = document.getElementById('local')
    window.localStorage.setItem('info2', inputLocal.value)
    inputLocal.value = ''
}
function lerLocal() {
    const ler = window.localStorage.getItem('info2')
    alert('Informação do Local Store é: ' + ler)
}


// COKIES
// Este metodo tem varias utilidades a mais como tempo de expiração e em quais paginas essa informação sera utilizada  +MAIS+
// FORMATO DE UM COKIES: document.Cokies = Nome=Info; expires=NEW-DATE; path=/


function salvarCokies() {
    const input = document.getElementById('cokies')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2022,13, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
}