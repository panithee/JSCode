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
    // const showItem = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)
    // const ulParent = document.getElementById('products')
    // showItem.forEach(item => {
    //   const liElement = document.createElement('li')
    //   liElement.textContent = `ID:${item.id}, NAME:${item.name}`
    //   ulParent.appendChild(liElement)
    // })  

    // for(let i = 0; i<showItem.length; i++) {
    //   const liElement = document.createElement('li')
    //   liElement.textContent = `ID:${showItem[i].id}, NAME:${showItem[i].name}`
    //   ulParent.appendChild(liElement)
    // } 

    // for(const item of showItem) {
    //   const liElement = document.createElement('li')
    //   liElement.textContent = `ID:${item.id}, NAME:${item.name}`
    //   ulParent.appendChild(liElement)
    // }

    const showItemOnPage = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)
    const ulParent = document.getElementById('products')
    showItemOnPage.forEach(item => {
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${item.id}, NAME:${item.name}`
      ulParent.appendChild(liElement)
    })
  }
  const pageHandler = (event) => { 
    // // const selectButtonParent = document.querySelector('.pagination')
    // // const button = selectButtonParent.childNodes
    // const button = document.querySelectorAll('button')
    // button.forEach(page => page.style = 'border: 1px solid #999')
    // // const button = document.getElementsByTagName('button')
    // // Array.from(button).forEach(page => page.style = 'border: 1px solid #999')
    
    // const clearText = document.querySelector('#products')
    // clearText.textContent = ""
    
    // const currentPage = event?.target.id ?? 1
    // showItemsOfCurrentPage(currentPage)
    // const currentButton = document.getElementById(currentPage)
    // currentButton.style = 'background-color: LightSteelBlue'

    const clearButtonStyle = document.querySelectorAll('button')
    clearButtonStyle.forEach(page => page.style = 'border: 1px solid #999')
    const clearText = document.querySelector('#products')
    clearText.textContent = ''
    let currentPage
    if(event === undefined || event === null){
      currentPage = 1
    }else{
      currentPage = event.target.id
    }
    showItemsOfCurrentPage(currentPage)
    const currentButton = document.getElementById(currentPage)
    currentButton.style = 'background-color: LightSteelBlue'

  }

  const showPageNumbers = () => {
    // const totalPages = getTotalPages(products, rowsPerPage)
    // const divClass = document.querySelector('.pagination')
    // for(let i=1; i<=totalPages; i++) {
    //   const button = document.createElement('button')
    //   button.setAttribute('id', i)
    //   button.textContent = i
    //   divClass.appendChild(button)
    //   button.addEventListener('click', pageHandler)
    // }

    const totalPage = getTotalPages(products, rowsPerPage)
    const divClass = document.querySelector('.pagination')
    for(let i=1; i<=totalPage; i++) {
      const button = document.createElement('button')
      button.setAttribute('id', i)
      button.textContent = i
      divClass.appendChild(button)
      button.addEventListener('click',pageHandler)
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
