function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
    if(allItems===null || allItems === undefined) return undefined
    if(allItems===[]) return []
    if(currentPage<=0 || rowsPerPage<=0 ) return allItems
  
  return allItems.slice(rowsPerPage*(currentPage-1), rowsPerPage*(currentPage-1)+rowsPerPage)
  // index 30-44, items 31-45
  // item =[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]
    
}

function greetings(name){
  return (`Hi ${name}`)
}

const codeId = 642

// common js module
// module.exports = {codeId, getItemsOfCurrentPage, greetings}
// es module
export {codeId, getItemsOfCurrentPage, greetings}
