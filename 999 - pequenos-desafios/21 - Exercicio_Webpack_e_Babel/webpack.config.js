// Antes de tudo vem o module.export = {}

// [entry] = O caminho até a pasta que queremos pegar esse caminho começa desta pasta webpack.config.js pode pegar mais de um arquivo se especificar o nome dele no final

/* [mode] = O modo em que deseja fazer o codigo:
[development] = Um modo onde o codigo não fica compacto para que ainda de para o desenvolvedor entender oque esta acontecendo
[production] = Extremamente compacto */

// [output] = A saida, você pode diser onde que que este arquivo compacto sejá criado e tambem qual vai ser o nome dele [se o output não for criado o nome vai ser a chave pasada no [entry] UTILIZE UM MODULO PARA PEGAR O CAMINHO CORRETAMENTE]

/* [module Loader] = Para adicionar as regras de quais arquivos o webpack deve ler e utilizando quais bibliotecas
 rules: [{
     test: /\.css$/,
     use: [nomes das bibliotecas a utilizar]
 }]
apos isso deve-se conectar os modulos CSS no JS assim o JS sera o unico arquvo com toda a informação
*/


/*
[module Plugins] = Para adicionar as regras de quais arquivos o webpack deve ler e utilizando quais bibliotecas

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
rules: [
    {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
    }
]
plugins: [new MiniCssExtractPlugin()]

apos isso deve-se conectar os modulos CSS no JS assim o JS sera o unico arquvo com toda a informação
*/




const url = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index: "./desenvolvimento/build.js"
    },

    mode: "development",

    output: {
        path: url.resolve(__dirname, 'arquivo-final'),
        filename: "[name].min.js"
    },

    module: {
        rules: [{
            test: /\.m?js$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },

    plugins: [new MiniCssExtractPlugin()]
}