const http = require("http")

const server = http.createServer((request, response) => {
 response.write("hola mundo desde node")
 response.end()
})

server.listen(8000, () => {
    console.log("servidor escuchando en el puerto 8000")
})
