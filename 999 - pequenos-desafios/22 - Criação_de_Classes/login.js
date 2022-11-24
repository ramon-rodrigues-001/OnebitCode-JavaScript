function verificar(nome, email, password) {
    const usuario = {
        email: 'ramon.rodrigues.dev@gmail.com',
        password: 111
    }

    if (email === usuario.email && password === usuario.password) {
        return `Ola ${nome} seja bem vindo novamente`
    }
    else {
        return `Essa conta não existe, Favor verifique seu email e senha`
    }
}

module.exports = verificar