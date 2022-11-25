function verificando(fullName, email, password, listaDeUsuarios) {

    if (email.indexOf(listaDeUsuarios) > -1 && 
    password.indexOf(listaDeUsuarios) > -1) {
        return `Seja bem-vindo novamente`
    }
    else {
        return 'Senha Salva com susseco'
    }
}

module.exports = verificando