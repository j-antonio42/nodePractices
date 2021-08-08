const fs = require("fs")

fs.mkdir("/",{ recursive: true },(error) => {
    if (error){
        console.error(error)
    } else {
        console.log("directory created yeah")
    }
})