const { template } = require('@babel/core')
// s
function totalPages(arrayItems, rowsPerPage) {
  //code here
  if(arrayItems === undefined || arrayItems === null){
    return undefined;
  } 
  else if(rowsPerPage === undefined ||  rowsPerPage === null || rowsPerPage===0 ){
    return 1;
  }
  return Math.ceil(arrayItems.length / rowsPerPage)
 

  
}
module.exports = totalPages
