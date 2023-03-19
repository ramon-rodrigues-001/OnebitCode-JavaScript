document.querySelector('#btn_salvar_session').addEventListener('click', ()=>{
    let dado = document.querySelector('#sessionStore')
    window.sessionStorage.setItem('info_1', dado.value)
    dado.value = ''
})
document.querySelector('#btn_ler_session').addEventListener('click', ()=>{
    let dado = window.sessionStorage.getItem('info_1')
    alert(dado)
})




document.querySelector('#btn_salvar_local').addEventListener('click', ()=>{
    let dado = document.querySelector('#localStore')
    window.sessionStorage.setItem('info_1', dado.value)
    dado.value = ''
})
document.querySelector('#btn_ler_local').addEventListener('click', ()=>{
    let dado = window.sessionStorage.getItem('info_1')
    alert(dado)
})
