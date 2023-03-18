export function evento(elemento) {
    const name = elemento.name.value
    const senha = elemento.senha.value
    const conf_senha = elemento.conf_senha.value

    if (name != '') {
        if (senha != '' && conf_senha != '' && senha === conf_senha) {
            alert('Welcome' + ' ' + name)
        }
        else {
            alert('Senha não confere!!')
        }
    }
    else {
        alert('Preencha o campo de nome!!')
    }
}