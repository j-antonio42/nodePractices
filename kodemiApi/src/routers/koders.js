const express = require('express')
const koders = require('../usecases/koders')
const router = express.Router()
const isAuth = require('../middlewares/auth')

router.get('/', isAuth, async (request, response) => {
    try {
        const allKoders = await koders.getAll()
        response.json({
            success: true,
            message: 'All koders',
            data: {
                koders: allKoders
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at getting the koders yo',
            error: error.message
        })
    }
})


router.post('/', async (request, response) => {
    try {
        const someKoder = request.body
        const postedKoder = await koders.postOne(someKoder)
       
        response.json({
            success: true,
            message: 'There it is',
            data: {
                postedKoder
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at posting the koder yo',
            error: error.message
        })
    }
})

router.patch('/:id', isAuth, async (request, response) => {
    try {
        const {id} = request.params
        const {body} = request

        const updateKoder = await koders.updateId(id, body)
       
        response.json({
            success: true,
            message: 'Koder updated',
            data: {
                updateKoder
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at deleting the koder yo',
            error: error.message
        })
    }
})

router.delete('/:id', isAuth, async (request, response) => {
    try {
        const {id} = request.params
        const deleteKoder = await koders.eraseOne(id)
       
        response.json({
            success: true,
            message: 'Koder deleted',
            data: {
                id
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at deleting the koder yo',
            error: error.message
        })
    }
})

module.exports = router