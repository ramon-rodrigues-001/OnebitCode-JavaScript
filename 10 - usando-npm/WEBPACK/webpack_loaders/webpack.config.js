// Antes de tudo vem o module.export = {
//
// }

// [entry] = O caminho até a pasta que queremos pegar esse caminho começa desta pasta webpack.config.js pode pegar mais de um arquivo se especificar o nome dele no final

// [mode] = O modo em que deseja fazer o codigo:
// [development] = Um modo onde o codigo não fica compacto para que ainda de para o desenvolvedor entender oque esta acontecendo
// [production] = Extremamente compacto

// [output] = A saida, você pode diser onde que que este arquivo compacto sejá criado e tambem qual vai ser o nome dele [se o output não for criado o nome vai ser a chave pasada no [entry] UTILIZE UM MODULO PARA PEGAR O CAMINHO CORRETAMENTE]


const url = require('path')

module.exports = {
    entry: {
        index: "./src/script.js"
    },

    mode: "development",

    output: {
        path: url.resolve(__dirname, "arquivo_principal"),
        filename: "index.js"
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}
