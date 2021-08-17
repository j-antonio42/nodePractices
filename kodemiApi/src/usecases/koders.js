const Koder = require('../models/koders')
const bcrypt = require('../lib/bcrypt')

function getAll(){
    return Koder.find()
}

async function postOne(someKoder){
    const {email, password} = someKoder //toda peticion a la base de datos es asincrona
    const koderFound = await Koder.findOne({email})

    if (koderFound) throw new Error ('Email already exits yo') 

    //encriptar el password
    const encryptedPassword = await bcrypt.hash(password)

    return Koder.create({...someKoder, password: encryptedPassword})
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