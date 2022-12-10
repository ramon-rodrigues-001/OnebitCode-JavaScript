/* Uma class comum ou mãe */
class User {
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password
        this.pontos = 7449
    }
}


/* Uma class filha com as heranças da mãe */
class AdmUser extends User {}
const adm = new AdmUser('ramon', 'ramon@gmail.com', 123412)



/* Outra class filha mais essa com metodos e atruibutos proprios */
class MembroUser extends User {
    constructor(name, email, password) {
        super(name, email, password)
        this.contribuir = 0
    }

    doar (valor) {
        this.contribuir = valor
    }    
}
const membro = new MembroUser('Julia', 'ju@gmail.com', 111)
membro.doar(65)
console.log(membro)