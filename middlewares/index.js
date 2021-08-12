const express = require('express')
const koderRouter = require('./routerKoders')
const server = express()

server.use(express.json())

//middleware a nivel de aplicaion o servidor
server.use((request, response, next) => {
  console.log('middleware de aplicacion')
  next()
})

server.get('/', (request, response) => {
    response.json({
        message: 'Hello koders'
    })
})

server.use('/koders', koderRouter) //para apuntar el endpoint a los metodos de routerKoder


server.listen(8080, () => {
    console.log('Server listening on 8080')
})


//un middleware son funciones
//(request, response, next) => {}

//hay 3 niveles de middleware
//nivel de aplicacion o servidor de scoope global
//nivel de router conjunto de rutas
//nivel de ruta  a una ruta especifica