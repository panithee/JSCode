const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
// 64130500047, Panithee Virojwongchai
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
    // if(allItems===null || allItems === undefined) return undefined
    // if(allItems===[]) return []
    if(currentPage<=0 || rowsPerPage<=0 ) return allItems
  
  return allItems?.slice(rowsPerPage*(currentPage-1), rowsPerPage*currentPage)
  // 30-44, 31-45
  item =[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]
   
    
}


module.exports = getItemsOfCurrentPage



// let x=[]
// for(let i = 0; i < allItems.length; i++) {
//   if(allItems.length%rowsPerPage === 0) {
//        x = allItems.slice(0, 1+rowsPerPage)
//   }
//   if(allItems.length%rowsPerPage !== 0) {
//     x = allItems.slice(rowsPerPage*(currentPage-1))
// }

//   if(currentPage ===1){
//     x = allItems.slice(0, rowsPerPage+1)
//   }
// }
// return x
// const range = [];
// const num = Math.ceil(allItems.length / rowsPerPage);
// for (let i = 1; i <= num; i++) {
//   range.push(i);
// }
// return range;
