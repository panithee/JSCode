const { template } = require('@babel/core')
// import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// import { products } from './data/products.js'

const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
const products = require('./data/products.js')

//your student id, firstname, and lastname here
// 64130500047, Panithee Virojwongchai
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items

  const showItemsOfCurrentPage = (currentPageNumber) => {
    const itemsInPage = getItemsOfCurrentPage(products, 
      currentPageNumber, rowsPerPage)
    const ulProduct = document.querySelector("#products")
    itemsInPage.forEach((item) => {
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${item.id}, NAME:${item.name}`
      ulProduct.appendChild(liElement)
    })  
  
  }
  const pageHandler = (event) => { 
      const clearButtonStyle = document.querySelectorAll('button')
      clearButtonStyle.forEach(button => button.style = "border: 1px solid #999")
      const clearProductText = document.getElementById('products')
      clearProductText.textContent = ""

      const currentPage = event?.target.id ?? 1
      showItemsOfCurrentPage(currentPage)

      const targetPageButton = document.getElementById(currentPage)
      targetPageButton.style = "background-color: LightSteelBlue"

  
  }

  const showPageNumbers = () => {
    const totalPage = getTotalPages(products, rowsPerPage)
    const divPagination = document.querySelector(".pagination")
    for(let i = 1; i<=totalPage; i++) {
      const button = document.createElement('button')
      button.setAttribute('id', i)
      button.textContent = i
      divPagination.appendChild(button)
      button.addEventListener('click', pageHandler)
    }
  }

  return {
    showPageNumbers,
    pageHandler
  }
}
module.exports = paginateManagement
// export { paginateManagement }
// const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
// showPageNumbers()
// pageHandler()
