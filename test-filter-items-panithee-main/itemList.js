import { products } from './data/products.js'
// const { template } = require('@babel/core')
// const products = require('./data/products.js')

//your student id, firstname, and lastname here
// 64130500047 Panithee Virojwongchai
function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    const input = document.querySelector('input')
    input.addEventListener('input', filterItemsHandler)
    showItems(items)

  }

  const filterItemsHandler = (event) => {
      const value = event.target.value.toLowerCase()
      const filteredItems = items.filter(item => {
        return (item.keywords.toLowerCase()).includes(value)
      })
      showItems(filteredItems)
    }
  

  const showItems = (items) => {
    const ulParent = document.getElementById('items')
    ulParent.textContent = ""
    items.forEach(item => {
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${item.id}, NAME:${item.name}, KEYWORDS:${item.keywords}`
      ulParent.appendChild(liElement)
    })
    
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}
// module.exports = itemList
export { itemList }
const { initialPage, filterItemsHandler, showItems } = itemList(products)
initialPage()
