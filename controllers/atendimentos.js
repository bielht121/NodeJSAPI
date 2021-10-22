module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e esta realizando um get'))

    app.post('/atendimentos', (req, res) => {
        
        console.log(req.body)
        res.send('Você está na rota de atendimentos e está realizando um post')

        /* para ler o body usamos uma biblioteca chamada body-parser (npm install body-parser)*/
    
    })
}

