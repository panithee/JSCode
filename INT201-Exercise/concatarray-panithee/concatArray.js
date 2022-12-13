const { template } = require("@babel/core");

function concatArray(array1, array2) {
  // code here
// 
  if (
    (array1 === null || array1 === undefined) &&
    (array2 === null || array2 === undefined)
  ) {
    return undefined;
  }
  if (array1?.length === 0 && array2?.length === 0) {
    return [];
  } if (array1 === undefined || array1 === null ||array1.length === 0  ) {
    return array2;
  } if (array2 === undefined ||array2 === null || array2.length === 0 ) {
    return array1;
  }
    let array3 = array1.concat(array2)
    return array3;

  
}
module.exports = concatArray;
