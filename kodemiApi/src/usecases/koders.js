const Koder = require('../models/koders')

function getAll(){
    return Koder.find()
}

function postOne(someKoder){
    return Koder.create(someKoder)
}

function eraseOne(id){
    return Koder.findByIdAndDelete(id)
}

function updateId(id, newData){
    return Koder.findByIdAndUpdate(id, newData, {new: true})
}

module.exports = {
    getAll,
    postOne,
    eraseOne,
    updateId
}