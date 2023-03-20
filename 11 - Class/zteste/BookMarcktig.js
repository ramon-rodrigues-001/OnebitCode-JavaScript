class BookMarcktig {
   
    constructor(cli_name, bookName, quantity) {
        this.name = cli_name
        this.bookName = bookName
        this.quantity = quantity
        this.valorDaCompra = 0
    }

    confirmCompra() {
        this.valorDaCompra = this.quantity * 120
    }
}

module.exports = BookMarcktig