const Express = require('express')
const App = Express()

App.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

App.listen('4000', () => {
    console.log('Cervidor Rodando.')
})