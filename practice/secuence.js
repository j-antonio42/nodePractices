function almostIncreasingSequence(arr){
    for(let i=0;i<arr.length;i++){
        let aux = [...arr];
        aux.splice(i,1);let test=true;
        //console.log(aux)
        for(let j=0;j<aux.length;j++){
            if(aux[j]>=aux[j+1]) test=false;
        }
        if(test==true){
            return true
        }
    }
   return false
}

console.log(almostIncreasingSequence([1,4,5,6,5]) ) 

