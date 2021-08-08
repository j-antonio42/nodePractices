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
    const {generation, gender, name, count} = request.query
    const content = await readFilePromise('./kodemia.json')

    let kodersData = content.koders

    // string -> true
    // indefinido -> false
    if(generation) {
        kodersData = kodersData.filter(koder => koder.generation === parseInt(generation))
    }
    
    if(gender) {
        kodersData = kodersData.filter(koder => koder.gender === gender)
      }

    if(name) {
        kodersData = kodersData.filter(koder => koder.name === name)
      }  
    
    if(count) {
        kodersData = kodersData.splice(0, parseInt(count))
    }
      content.koders = kodersData || content.koders 

    response.status(200).json({
        success: true,
        message: 'All koders',
        data: {
            koders: content.koders
        }
    })

})


router.post('/', async (request, response) => {
    
    const newKoder = request.body
    const content = await readFilePromise('kodemia.json')

    content.koders.push(newKoder)

    fs.writeFileSync('kodemia.json',JSON.stringify(content, null, 2), 'utf8')

    response.json({
        success: true,
        message: 'koder added',
        data:{
            koder: newKoder
        }

    })

})


router.patch('/:id', async(request, response) => {

    const {id} = request.params
    const {name, generation} = request.body

    const content = await readFilePromise('kodemia.json')

    const newKoders = content.koders.map((koder) => {
        if (koder.id === parseInt(id)) {
            koder = {...koder, name, generation}
        }
        return koder
    })

    content.koders = newKoders

    fs.writeFileSync('kodemia.json',JSON.stringify(content, null, 2), 'utf8')

    response.json({
        success: true,
        message: 'koder updated',
    })

})

router.delete('/:id', async(request, response) => {

    const {id} = request.params

    const content = await readFilePromise('kodemia.json')

    const filteredKoder = content.koders.filter(koder => koder.id !== parseInt(id))

    content.koders = filteredKoder

    fs.writeFileSync('kodemia.json',JSON.stringify(content, null, 2), 'utf8')

    response.json({
        success: true,
        message: 'koder deleted',
    })

})

router.get('/:id', async (request, response) => {

    const {id} = request.params
    const content = await readFilePromise('kodemia.json')

    const foundKoder = content.koders.find(koder => koder.id === parseInt(id))

    if(!foundKoder){
        response.status(404).json({
            success: false,
            message: 'not found',
        })
    } else {
        response.json({
            success: true,
            message: 'Here he is',
            data: {
                koder: foundKoder
            }
        })
    }
})


module.exports = router

