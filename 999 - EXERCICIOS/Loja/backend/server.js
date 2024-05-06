const Express = require('express')
const { default: mongoose } = require('mongoose')

const app = Express()
const portaMongoose = "mongodb+srv://ramon:nIZQQ073GadooFZD@cluster0.cij4gvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})




mongoose.connect(portaMongoose)
.then(()=> {
    console.log('conectado ao banco de dados...')
    app.listen(4000, () => {
        console.log('Servidor Rodando...')
        console.log('Porta: http://localhost:4000/')
    })
}). catch(error => {
    console.log('===================== Erro ao conectar ao banco de dados =====================')
})
