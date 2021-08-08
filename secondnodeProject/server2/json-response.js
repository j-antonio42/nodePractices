const http = require('http')
const { stringify } = require('querystring')

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json')

    let object = {name:"Antoio", lastName: "Ibarra"}

    let objectJson = JSON.stringify(object)

    response.end(objectJson)
    
})

server.listen(8080, () => {
    console.log("servidor escuchando en http://localhost:8080")
})
