// Chamando as outros modulos

// Detalhes os palavrinhas magicas são [module.exports = sunction / para exporta os arquivos desejados] [require / para chamar os arquivos desejados] E A FUNÇÃO QUE ESTA CHAMANDO VAI DIREITO PARA UMA VARIAVEL ENTRÃO LEMBRE DE CHAMAR PELO NOME DA VARIAVEL


const render = require("./render.js")
const store = require("./store.js")

console.log("Iniciando aplicação");
render()
store()
console.log("Aplicação finalizada");
