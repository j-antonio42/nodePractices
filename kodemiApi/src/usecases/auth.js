const Koder = require('../models/koders')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')


async function  login (email, password) {
    console.log( email, password)
    const koderFound = await Koder.findOne({email})

    if (!koderFound) throw new Error ('Invalid Credencials') 

    const isValidPassword = await bcrypt.compare(password, koderFound.password)

    if (!isValidPassword) throw new Error ('Invalid Credencials') 

    //regresar un token
    return jwt.sign({id: koderFound._id})
}

module.exports = {
    login
}