const nodemailer = require('nodemailer')
const db = require('./models/db')
const Collection = require('./models/db')

  const remetente = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        port: 465,
        secure: true,
        auth:{
            user: 'seuemail',
            pass: 'senha'
        }
    })

 Collection.distinct('atributo').then((usuarios)=>{
    
    var emailASerEnviado = {
        from: 'seuemail',
        to: usuarios,
        subject: 'Enviando Email com Node.js',
        html: "<h1>Título</h1><"
        };
    
        remetente.sendMail(emailASerEnviado, function(error){
            if (error) {
            console.log(error);
            } else {
            console.log('Email enviado com sucesso para os usuários: ' + usuarios);
            }
            });
})
    
    




 