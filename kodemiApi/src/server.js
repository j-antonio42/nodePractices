// La definicion de nuestro servidor

const express = require('express') // importar express
const cors = require('cors')

const kodersRouter = require('./routers/koders')
const mentorsRouter = require('./routers/mentors')
const authRouter = require('./routers/auth')

const server = express() // instanciar express

//middlewares
server.use(express.json())
server.use(cors())

//agregamos los routers
server.use('/koders', kodersRouter)
server.use('/mentors', mentorsRouter)
server.use('/auth', authRouter)

module.exports = server  // exportar el server

// Requerimientos
// Generara endpoint GET /koders
// 1. Asegurarnos que nuestro model exista (si no existe lo creamos)
// 2. Crear el caso de uso necesario, si es post, una funcion que permita crear koders 
// 3. Crear el endpoint -> seccion de routers

/*
Primera parte
Kodemia necesita gestionar mentores
-crear mentores
-actualizar
-eliminar-
-obtener el detalle de un mentor
-obetener datos de los mentores
PROPIEDADES
name
lastname
module ['maquetado', ' js' , 'cloud']
edad

Segunda parte
Tambien necesita gestionar celulas de mentores:
es un grupo de mentores que pueden ser asignados a un grupo.
tienen un nombre que indentifica
dice que mentores pertenecen a dicha celula

se requiere crear celulas de mentores
-actualizarlas
-eliminarlas
-obtener detalle
*/