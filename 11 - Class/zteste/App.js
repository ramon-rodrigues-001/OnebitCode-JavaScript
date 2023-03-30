const User = require("./entities/User.js")
const Account = require("./entities/Account.js")

class App {
    static register(name, email) {
        const newUser = new User(name, email, new Account(email))
        return newUser
    }
}

module.exports = App