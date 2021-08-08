const fs = require("fs")

fs.unlink("anotherFile.js",(error) => {
    if (error){
        console.error(error)
    } else {
        console.log("file removed yeah")
    }
})