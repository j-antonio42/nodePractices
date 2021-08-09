const express = require('express')
const router = express.Router()
const fs = require('fs')

function readFilePromise(pathToRead) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathToRead, 'utf8', (err, content) => {
            if (err) {
                reject(err)
            }else {
                const json = JSON.parse(content)
                resolve(json)
            }
        })
    })
}


router.get('/', async(request, response) => {

    // query params
    const {module, gender, name, count} = request.query
    const content = await readFilePromise('./kodemia.json')

    let mentorsData = content.mentors

    // string -> true
    // indefinido -> false
    if(module) {
        mentorsData = mentorsData.filter(mentor => mentor.module === module)
    }
    
    if(gender) {
        mentorsData = mentorsData.filter(mentor => mentor.gender === gender)
      }

    if(name) {
        mentorsData = mentorsData.filter(mentor => mentor.name === name)
      }  
    
    if(count) {
        mentorsData = mentorsData.splice(0, parseInt(count))
    }
      content.mentors = mentorsData || content.mentors

    response.status(200).json({
        success: true,
        message: 'All mentors',
        data: {
            koders: content.mentors
        }
    })

})


router.post('/', async (request, response) => {
    
    const newMentor = request.body
    const content = await readFilePromise('kodemia.json')

    content.mentors.push(newMentor)

    fs.writeFileSync('kodemia.json',JSON.stringify(content, null, 2), 'utf8')

    response.json({
        success: true,
        message: 'mentor added',
        data:{
            mentor: newMentor
        }

    })

})


router.patch('/:id', async(request, response) => {

    const {id} = request.params
    const {name, generation} = request.body

    const content = await readFilePromise('kodemia.json')

    const newMentor = content.mentors.map((mentor) => {
        if (mentor.id === parseInt(id)) {
            mentor = {...mentor, name, generation}
        }
        return mentor
    })

    content.mentors = newMentor

    fs.writeFileSync('kodemia.json',JSON.stringify(content, null, 2), 'utf8')

    response.json({
        success: true,
        message: 'mentor updated',
    })

})

router.delete('/:id', async(request, response) => {

    const {id} = request.params

    const content = await readFilePromise('kodemia.json')

    const filteredMentor = content.mentors.filter(mentor => mentor.id !== parseInt(id))

    content.mentors = filteredMentor

    fs.writeFileSync('kodemia.json',JSON.stringify(content, null, 2), 'utf8')

    response.json({
        success: true,
        message: 'mentor deleted',
    })

})

router.get('/:id', async (request, response) => {

    const {id} = request.params
    const content = await readFilePromise('kodemia.json')

    const foundMentor = content.mentors.find(mentor => mentor.id === parseInt(id))

    if(!foundMentor){
        response.status(404).json({
            success: false,
            message: 'not found',
        })
    } else {
        response.json({
            success: true,
            message: 'Here he is',
            data: {
                mentor: foundMentor
            }
        })
    }
})


module.exports = router

