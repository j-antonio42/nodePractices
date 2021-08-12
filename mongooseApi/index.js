const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const Koder = require('./koderModel')
const server = express()

const dbUser = 'Toni'
const dbPassword = 'mikeperruno'
const dbHost = 'kodemia12g.zelm4.mongodb.net'
const dbName = 'kodemia'

const url = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`

//middleware
server.use(express.json())

server.get('/', (request, response) => {
    response.json({
        message: 'Hello koders'
    })
})

server.get('/koders', async (request, response) => {

    const {gender, age, is_min_age } = request.query

    const filters = {}

    if(gender) filters.gender = gender
    if(age){
        if (JSON.parse(is_min_age) ){
            filters.age = {$get: parseInt(age)}
        }else{
            filters.age = age
        }
    } 
   
    console.log(filters)

    const koders = await Koder.find(filters)

    response.json({
        success: true,
        message: 'all koders of DB',
        data: {
            koders
        }
    })
})


server.post('/koders', async (request, response) => {

   try {
    const newKoder = request.body

    const koderCreated = await Koder.create(newKoder)
 
    response.json({
     success: true,
     message: 'koder created',
     data: {
         koder: koderCreated
     }
   })
    
        }catch (error){
    response.status(400)
    response.json({
        success: true,
        message: error.message
    })
   }
})


// Práctica:

// GET /koders?gender=m&age=23
// POST /koders
// PATCH /koders
// DELETE /koders


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(async (connection) => {
        console.log('finally conected')
        server.listen(8000, () => {
            console.log('Server listening on 8000')
        })
    })
    .catch(err => {
        console.log('Error: ', err)
    })

