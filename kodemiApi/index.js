// inicialice el 
// server
// conexion a las Bases de datos
require('dotenv').config()

//console.log('Env: ', process.env)
const server = require('./src/server') //esta variable contiene la instancia de express
const dbConnect = require('./src/lib/db') //esta variable contiene la funcion connect a la db


dbConnect()
     .then(() => {
    console.log('Data base connection established')
    server.listen(8000, () => {
        console.log('Server listening on 8000...')
    })
    })
    .catch(err => console.error(err))

  // se inicializa el server, despues de la coneccion a la db