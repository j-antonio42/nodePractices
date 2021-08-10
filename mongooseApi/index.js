const express = require('express')
const mongoose = require('mongoose')
const Koder = require('./koderModel')
const server = express()

const dbUser = 'Toni'
const dbPassword = 'mikeperruno'
const dbHost = 'kodemia12g.zelm4.mongodb.net'
const dbName = 'kodemia'

const url = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`




server.get('/', (request, response) => {
    response.json({
        message: 'API with mongoose'
    })
})

server.get('/koders', async (request, response) => {

    const koders = await Koder.find()


    response.json({
        success: true,
        message: 'all koders of DB',
        data: {
            koders
        }
    })
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

   