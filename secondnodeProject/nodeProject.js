const fs = require("fs")

const callback = (error) => {
    if (error) {
        console.error(error)
    } else {
        console.log("the file has been created yeah")
    }
}

fs.writeFile("fileForDirectory.js", "", "utf8", callback)