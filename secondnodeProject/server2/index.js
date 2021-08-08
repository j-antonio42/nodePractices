const http = require("http")

const server = http.createServer((response, request) =>{
    console.log("path:", request.url);
    console.log("method:", request.method);
    

    if (request.url === "/mentors"){
        if (request.method === 'POST'){
            response.write('Aquí podrás crear un mentor')
        } 
        else if (request.method === 'GET'){
            response.write('Aquí encontrarás a los mentores de Kodemia')
        } else {
            response.write('No se esperaba esto')
        }
    } else {
        response.write('no se esperaba esto')
    }
    response.end()
})

server.listen(8000, () => {
    console.log("servidor escuchando en http://localhost:8000")
})
