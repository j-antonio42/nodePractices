function makeArrayConsecutive2(statues) {
    let sorted =  statues.sort((a,b)=>a-b);
    console.log(sorted)
  let diferences = [];
  for(let i=0;i<sorted.length-1;i++){
               diferences.push(sorted[i+1]-sorted[i]);
               console.log(diferences)
  }
  return diferences.reduce((accum,item)=>accum+(item-1),0 )
 
  } 

console.log(makeArrayConsecutive2([6,2,3,8]) ) 