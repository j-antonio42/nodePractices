const Mentor = require('../models/mentors')

function getAll(){
    return Mentor.find()
}

function postOne(someMentor){
    return Mentor.create(someMentor)
}

function eraseOne(id){
    return Mentor.findByIdAndDelete(id)
}

function updateId(id, newData){
    return Mentor.findByIdAndUpdate(id, newData, {new: true})
}

module.exports = {
    getAll,
    postOne,
    eraseOne,
    updateId
}