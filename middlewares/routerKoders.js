const { request, response } = require('express')
const express = require('express')

const router = express.Router()

router.use((request, response, next) => {
    console.log('middleware en el router')
    next()
})

router.get('/', (request, response) => {
    response.json({
        message: 'get all koders'
    })
})



module.exports = router