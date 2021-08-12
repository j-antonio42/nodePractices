const mongoose = require('mongoose')
const server = require('../server')

const dbUser = 'Toni'
const dbPassword = 'mikeperruno'
const dbHost = 'kodemia12g.zelm4.mongodb.net'
const dbName = 'kodemia'

const url = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}` 

// coneccion a la base de datos por medio de moongose

function connect(){
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}) 
}
    
// connect nos devuelve una promesa que cuando se resuelve nos da la conexion
// en este archivo creamos una funcion que estara preparada para la conexion a la base de datos
// no se regresa la conexion se regresa la promesa para donde sea que se llame se ejecute

module.exports = connect  //funcion exportada