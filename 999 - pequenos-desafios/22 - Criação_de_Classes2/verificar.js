function verificando(fullName, email, password, listaDeUsuarios) {

    listaDeUsuarios.push({fullName, email, password})


    console.log(listaDeUsuarios)

    if (listaDeUsuarios.User?.indexOf(email) > -1 && 
    listaDeUsuarios.User?.indexOf(password) > -1) {
        return `Seja bem-vindo novamente`
    }
    else {
        return 'Senha Salva com susseco'
    }
}

module.exports = verificando