const express = require('express')
const mentors = require('../usecases/mentors')
const router = express.Router()
const isAuth = require('../middlewares/auth')

router.use(isAuth)

router.get('/', async (request, response) => {
    try {
        const allMentors = await mentors.getAll()
        response.json({
            success: true,
            message: 'All mentors',
            data: {
                mentors: allMentors
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at getting the mentors yo',
            error: error.message
        })
    }
})


router.post('/', async (request, response) => {
    try {
        const someMentor = request.body
        const postedMentor = await mentors.postOne(someMentor)
       
        response.json({
            success: true,
            message: 'There it is',
            data: {
                postedMentor
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at posting the mentor yo',
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try {
        const {id} = request.params
        const {body} = request

        const updateMentor = await mentors.updateId(id, body)
       
        response.json({
            success: true,
            message: 'Mentor updated',
            data: {
                updateMentor
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at deleting the mentor yo',
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const {id} = request.params
        const deleteMentor = await mentors.eraseOne(id)
       
        response.json({
            success: true,
            message: 'Mentor deleted',
            data: {
                id
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at deleting the mentor yo',
            error: error.message
        })
    }
})

module.exports = router