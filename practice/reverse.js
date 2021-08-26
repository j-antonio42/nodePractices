function palindrome(str){
    let arr = [...str]
    let revSpace = [...str].reverse().filter(value => value != " ")
    let indexArray = []
    arr.forEach((item, index) => {
        if (item == ' '){
         indexArray.push(index)
        }
    });
    //console.log(arr)
    indexArray.forEach((item) =>{
        revSpace.splice(item,0,' ')
     })
    return revSpace.join('')
}

console.log(palindrome('ola ke asiendo nada o ke ase'))