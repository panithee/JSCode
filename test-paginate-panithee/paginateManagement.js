// const { template } = require('@babel/core')
import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
import { products } from './data/products.js'

// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')

//your student id, firstname, and lastname here
// 64130500047, Panithee Virojwongchai
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items

  const showItemsOfCurrentPage = (currentPageNumber) => {
    const itemsOfCurrentPage = getItemsOfCurrentPage(products,currentPageNumber,rowsPerPage)
    const ulParentElement = document.getElementById('products')
    ulParentElement.textContent = ""
    for(let i=0;i<itemsOfCurrentPage;i++){
      const liElement = document.createElement('li')
      liElement.textContent = `{id: ${products[i].id}, name: ${products[i].name}}`
      ulParentElement.appendChild(liElement)
    }
  }
  const pageHandler = (event) => {
    if(event.target.id === 0){
      showItemsOfCurrentPage(1)
    }else{
      const buttonPageFire = event.target
      const buttonChange = buttonPageFire.getAttribute('id')
      showItemsOfCurrentPage(Number(buttonChange))
      buttonPageFire.style = 'border: 1px solid #999; background-color: LightSteelBlue'
    }
    
  }

  const showPageNumbers = () => {
    const paginationDiv = document.querySelector('.pagination')
    for(let i=1; i<=getTotalPages(products, rowsPerPage); i++){
      const button = document.createElement('button')
      button.setAttribute('id', String(i))
      button.textContent = i
      paginationDiv.appendChild(button)
      button.addEventListener('click', pageHandler)
    }
  }

  return {
    showPageNumbers,
    pageHandler
  }
}
// module.exports = paginateManagement
export { paginateManagement }
const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
showPageNumbers()
pageHandler()
