
const books = require("./bookList").bookList;
//เริ่มเขียนต่อจากตรงนี้

// const findByTitle = (arr,name) => {
//     let books = []
//     for (const book of arr) {
//         if(book.title.includes(name)){
//             books.push(book)
//         }
//     }
//     return books
// }

// console.log(findByTitle(books,"Flex"))

// const findByAuthor = (arr,name) =>{
//     let books=[]
//     for(const book of arr){
//         if(book.authors.includes(name)){
//             books.push(book)
//             // console.log(book.authors)
//         }
//     }
//     return books
// }

// console.log(findByAuthor(books,"Danno Ferrin"))

// const findByCategories = (arr, name) => {
//     let books = []
//     for (const book of arr) {
//         if(book.categories.includes(name)){
//             books.push(book)
//         }
//     }
//   return books
// };

// console.log(findByCategories(books, "Open Source"))

const findByDate = (arr,date) => {
    let emptyArr=[]
    for(const book of arr){
        // console.log(book)
        if((book.publishedDate !== undefined) && (book.publishedDate !== null)){
            if(new Date(book.publishedDate.$date).getTime()=== new Date(date).getTime()){
                emptyArr.push(book)
            }
        }
    }
    return emptyArr
}

console.log(findByDate(books, '2011-01-14'))
