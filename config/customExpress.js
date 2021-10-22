/*chama a biblioteca 'express' */
const express = require('express')
/* npm install consign*/
/* Serve para que o index consiga acessar outras pastas como 'controllers' que criamos para organizar o código*/
const consign = require('consign')

/*chama a biblioteca body-parser*/
const bodyParser = require('body-parser')

/*exporta função para que fique visível para o index.js*/
module.exports = () => {
    /* o servidor express vai executar tudo que estiver dentro do 'app'*/
    const app = express()

    /*extender true é um paramtro necessário, pesquisar depois porque */
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    /* chamando consign, e dizendo para incluir tudo de 'controllers' no 'app' */
    consign()
        .include('controllers')
        .into(app)
    
        return app

}
