// const {codeId, getItemsOfCurrentPage, greetings } = require(`./myLib/getItemsOfCurrentPage.js`)
import {codeId, getItemsOfCurrentPage, greetings} from './myLib/getItemsOfCurrentPage.js'
import {BookMark} from './myLib/bookMarkManagement.js'

console.log(getItemsOfCurrentPage([5,10,35,55,60,30,4,6,7,8],1,10))
console.log(getItemsOfCurrentPage([5,10,35,55,60,30,4,6,7,8],2,2))

console.log(greetings("Three"))
console.log(codeId)

const myBookMark = new BookMark('1-256-5678',199)
console.log(myBookMark)