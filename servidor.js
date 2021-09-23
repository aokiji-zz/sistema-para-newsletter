const mongoose = require('mongoose')
const Colecttion = require('./models/db')
const db = require('./models/db')
const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const bodyparser = require('body-parser')
const port = 8081
//configuração
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyparser.urlencoded({extended: true}))
//rotas
app.get('/cadastro', (req, res)=>{
    res.render('formulario')
    console.log("Página Funcionou!!")
})

app.post('/add-cadastrar', (req, res)=>{
     usuarioCadastrar = {
        email: req.body.email
    },
     data = new Colecttion(usuarioCadastrar);
    data.save().then(()=>{
        console.log('Usuário cadastrado com sucesso!!')
    }).catch((erro)=>{
        console.log('Houve um erro '+ erro)
    })
    res.render('cadastrou')
})

app.listen(port, ()=>{
    console.log(`servidor rodando na url http://localhost:${port}`)
})