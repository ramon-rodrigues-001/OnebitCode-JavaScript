const Express = require('express')
const { default: mongoose } = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');
const Produto = require('./models/produto.js')

const app = Express()
app.use(bodyParser.json())
app.use(cors());
const portaMongoose = "mongodb+srv://ramon:nIZQQ073GadooFZD@cluster0.cij4gvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



app.post('/api/salvar-produto', (req, res) => {
    const { ImgUrl, nome, valorAntigo, valorAtual } = req.body;

    const produto = new Produto({
        url: ImgUrl,
        nomdeProduto: nome,
        valorAntigo: valorAntigo,
        valorAtual: valorAtual
    })

    try {
        produto.save()
        console.log('Produto salvo ao banco de dados')
    }
    catch {
        console.log('===== Erro ao salvar produto =====')
    }
    
    res.status(200).json({ mensagem: 'Dados recebidos com sucesso!' });
});


app.get('/api/produtos', async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.json(produtos)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


mongoose.connect(portaMongoose)
.then(()=> {
    console.log('conectado ao banco de dados...')
    app.listen(4000, () => {
        console.log('Servidor Rodando...')
        console.log('Porta: http://localhost:4000/')
    })
}). catch(error => {
    console.log('============= Erro ao conectar ao banco de dados ============= :' + error)
})
