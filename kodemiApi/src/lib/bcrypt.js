const bcrypt = require('bcrypt')

function hash(str){
   return bcrypt.hash(str, 10)
}

module.exports = {
    ...bcrypt,
    hash
}