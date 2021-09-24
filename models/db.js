const mongoose = require('mongoose')

//configuração BD
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/bancodedados").then(()=>{
    console.log("Conectado com sucesso!!")
}).catch((erro)=>{
    console.log("Erro ao se conectar: "+erro)
}) //comando no terminal 'use' "nome do banco"' ==> para criar um BD

//definindo o model (como o BD em MySQL)
const UsuariosSchema = mongoose.Schema({

    email: {
        type: String,
        require: true
    }
})

var Colettion = mongoose.model('collection', UsuariosSchema)//criando a collection usuarios dentro do model (como uma tabela MySQL)
module.exports = Colettion
