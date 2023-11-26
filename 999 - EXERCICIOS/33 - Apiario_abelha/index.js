const Express = require('express')
const App = Express()

App.set('view engine', 'ejs')

App.get('/', (req, res) => {
    res.render('index')
})

App.listen('3000', () => {
    console.log('Cervidor Rodando.')
})