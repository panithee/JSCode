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
    const showItem = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage) 
    const ulElement = document.getElementById('products')
    for(let i of showItem){
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${i.id}, NAME:${i.name}`
      ulElement.appendChild(liElement)
    }

  }
  const pageHandler = (event) => { 
    const allButton = document.querySelectorAll('button')
    allButton.forEach(page => page.style = "border: 1px solid #999")
    const clearItem = document.getElementById('products')
    clearItem.textContent = ""
    const currentPage = event?.target.id ?? 1
    showItemsOfCurrentPage(currentPage)
    const buttonOfCurrentPage = document.getElementById(currentPage)
    buttonOfCurrentPage.style = "background-color: LightSteelBlue"
  }

  const showPageNumbers = () => {
    const totalPages = getTotalPages(products, rowsPerPage)
    const divClass = document.querySelector('.pagination')
    for(let i=1; i<=totalPages ;i++){
      const button = document.createElement('button')
      button.setAttribute('id', i)
      button.textContent = i
      divClass.appendChild(button)
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
