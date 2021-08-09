const express = require('express')
const fs = require('fs')
const kodersRouter = require('./routers/koders')
const mentorsRouter = require('./routers/mentors')

//tener acceso al server - instanciar express
// middleware : lo que llegue en el body lo va a parsear en un objeto json
// para que sepa que vamos a enviar objetos de js

const server = express()
server.use(express.json())
server.use('/koders', kodersRouter)
server.use('/mentors', mentorsRouter)

//funcion con promesa para leer archivo

function readFilePromise(pathToRead) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathToRead, 'utf8', (err, content) => {
            if (err) {
                reject(err)
            }else {
                const json = JSON.parse(content)
                resolve(json)
            }
        })
    })
}



server.get('/koders', async(request, response) => {

    // query params
    const {generation, gender, name, count} = request.query
    const content = await readFilePromise('./kodemia.json')

    let kodersData = content.koders

    // string -> true
    // indefinido -> false
    if(generation) {
        kodersData = kodersData.filter(koder => koder.generation === parseInt(generation))
    }
    
    if(gender) {
        kodersData = kodersData.filter(koder => koder.gender === gender)
      }

    if(name) {
        kodersData = kodersData.filter(koder => koder.name === name)
      }  
    
    if(count) {
        kodersData = kodersData.splice(0, parseInt(count))
    }
      content.koders = kodersData || content.koders 

    response.status(200).json({
        success: true,
        message: 'All koders',
        data: {
            koders: content.koders
        }
    })

})


/*
server.get('/koders', (request, response) => {

    const kodersObject = JSON.parse(fs.readFileSync('./kodemia.json', 'utf-8'))

    response.json(kodersObject)

}) */


server.post('/koders', async (request, response) => {
    
    const newKoder = request.body
    const content = await readFilePromise('kodemia.json')

    content.koders.push(newKoder)

    fs.writeFileSync('kodemia.json',JSON.stringify(content, null, 2), 'utf8')

    response.json({
        success: true,
        message: 'koder added',
        data:{
            koder: newKoder
        }

    })

})


// sintaxis universal
// method / recurso / identificador
// patch / koders / id
// patch / koders / 12

server.patch('/koders/:id', async(request, response) => {

    const {id} = request.params
    const {name, generation} = request.body

    const content = await readFilePromise('kodemia.json')

    const newKoders = content.koders.map((koder) => {
        if (koder.id === parseInt(id)) {
            koder = {...koder, name, generation}
        }
        return koder
    })

    content.koders = newKoders

    fs.writeFileSync('kodemia.json',JSON.stringify(content, null, 2), 'utf8')

    response.json({
        success: true,
        message: 'koder updated',
    })

})

server.delete('/koders/:id', async(request, response) => {

    const {id} = request.params

    const content = await readFilePromise('kodemia.json')

    const filteredKoder = content.koders.filter(koder => koder.id !== parseInt(id))

    content.koders = filteredKoder

    fs.writeFileSync('kodemia.json',JSON.stringify(content, null, 2), 'utf8')

    response.json({
        success: true,
        message: 'koder deleted',
    })

})

server.get('/koders/:id', async (request, response) => {

    const {id} = request.params
    const content = await readFilePromise('kodemia.json')

    const foundKoder = content.koders.find(koder => koder.id === parseInt(id))

    if(!foundKoder){
        response.status(404).json({
            success: false,
            message: 'not found',
        })
    } else {
        response.json({
            success: true,
            message: 'Here he is',
            data: {
                koder: foundKoder
            }
        })
    }
})


server.listen(8080, () => {
    console.log('listening on port localhost: 8080')
})

// GET mentors -> que regrese un string
// POST mentors -> que regrese otro string

//leer archivo koders.json y regresar los koders desde un metodo get
// endpoint : el conjunto de un metodo y una ruta
// get /koders/name