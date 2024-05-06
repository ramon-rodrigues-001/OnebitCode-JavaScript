const mongoose = require('mongoose')

const Produto = mongoose.model("Produto", {
    url: String,
    nomdeProduto: String,
    valorAntigo: Number,
    valorAtual: Number
}) 

module.exports = Produto
