const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
// 64130500047, Panithee Virojwongchai
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
   if(allItems === null || allItems === undefined){
    return undefined
   }
   else if(allItems%rowsPerPage===0){
    return []
   }
   else if(rowsPerPage<=0 || currentPage <= 0){
    return allItems
   }else{
    return allItems.slice((currentPage-1)*rowsPerPage, currentPage*rowsPerPage)
   }
 
   
}


module.exports = getItemsOfCurrentPage
