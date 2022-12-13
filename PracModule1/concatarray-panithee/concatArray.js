const { template } = require("@babel/core");

function concatArray(array1, array2) {
  //code here
  if((array1 === null || array1 === undefined) && (array2 === null || array2 === undefined)) {
    return undefined
  }
  if((array1===[] && array2 === [])) {
    return []
  }
  if((array1===null || array1===undefined)){
    return array2
  } 
   else if((array2 === null || array2 === undefined)){
    return array1
  }else{
    return array1.concat(array2)
  }
  

}
module.exports = concatArray;
