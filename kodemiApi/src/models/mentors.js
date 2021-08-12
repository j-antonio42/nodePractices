const mongoose = require('mongoose')

// Schema
const mentorsSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        enum: ['m', 'f'],
        required: true
    },
    module: [{
        type: String,
        minLength: 2,
        enum: ['Hello koders', 'Maquetado', 'Javascript', 'Backend', 'Cloud', 'React'],
        maxLength: 50,
        required: true,
        trim: true
    }]
})

// model

const model = mongoose.model('mentors', mentorsSchema)

module.exports = model               