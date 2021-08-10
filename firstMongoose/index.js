const mongoose = require('mongoose')

const dbUser = 'Toni'
const dbPassword = 'mikeperruno'
const dbHost = 'kodemia12g.zelm4.mongodb.net'
const dbName = 'kodemia'

const url = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`


//schema
const koderSchema = new mongoose.Schema({
name: {
    type: String,
    minLength: 2,
    maxLength: 50,
    require: true
},
lastName: {
    type: String,
    minLength: 2,
    maxLength: 50,
    require: true
    },
age: {
    type: Number,
    min: 0,
    max: 90,
    require: true
    },
gender: {
    type: String,
    enum: ['m', 'f'],
    require: true
    }
})

    //model
const Koder = mongoose.model('koders', koderSchema) 


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(async (connection) => {
       console.log('db connected finally')

       //const koders = await Koder.find({})
       //console.log(koders)

       const koderCreated = await Koder.create({name: 'Alfred', lastName: 'Pizana', gender: 'm', age: 27})
       console.log(koderCreated)
     })
    .catch(err => {
        console.log('error: ', err)
    })