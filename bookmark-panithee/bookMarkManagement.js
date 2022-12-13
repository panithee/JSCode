const { template } = require("@babel/core");
//write your student id, firstname, and lastname here
// 64130500047, Panithee Virojwongchai
class BookMark {
  constructor(isbn, totalPages = 0) {
    this.bookMarks = [];
    this.isbn = isbn;
    this.totalPages = totalPages;
  }

  addBookMark(pageNumber) {
    // if (pageNumber >= 1 && pageNumber <= this.totalPages) {
    //   this.bookMarks.push(pageNumber);
    // }
    return (pageNumber >=1 && pageNumber <= this.totalPages) ? this.bookMarks.push(pageNumber) : this.bookMarks.length;
    
  }

  removeBookMark(pageNumber) {
    // if (this.bookMarks.includes(pageNumber)) {
    //   this.bookMarks = this.bookMarks.filter((page) => page !== pageNumber);
    //   return pageNumber;
    // } else {
    //   return undefined;
    // }
    if(this.bookMarks.includes(pageNumber)){
      this.bookMarks.splice(this.bookMarks.indexOf(pageNumber), 1);
      console.log(this.bookMarks)
      return pageNumber
    }else{
      return undefined
    }
  }
  
  goToFirstBookMark(){
    return this.bookMarks?.[0]
  }

  goToLastBookMark(){
    return this.bookMarks?.[this.bookMarks.length-1]
  }

  getBookMarks(){
    return this.bookMarks
  }

}

module.exports = BookMark;

let bookMark = new BookMark(1234567890, 100);
console.log(bookMark.addBookMark(1));
console.log(bookMark.addBookMark(2));
console.log(bookMark.addBookMark(3));
console.log(bookMark.addBookMark(4));
// console.log(bookMark.addBookMark(2));
// console.log(bookMark.getBookMarks());
console.log(bookMark.removeBookMark(2));

// constructor(isbn, totalPages=0){
//   this.isbn = isbn
//   this.totalPages = totalPages
//   this.bookMarks = []
// }

// addBookMark(pageNumber){
//   if(pageNumber>=1 && pageNumber <= this.totalPages){
//     this.bookMarks.push(pageNumber)
//   }
//   return this.bookMarks.length
// }

// removeBookMark(pageNumber){
//  if(this.bookMarks.includes(pageNumber)){
//   // this.bookMarks = this.bookMarks.filter(page => page!=pageNumber)
//   this.bookMarks.splice(this.bookMarks.indexOf(pageNumber), 1)
//      return pageNumber
//  }else{
//   return undefined
//  }
// }

// goToFirstBookMark(){
//   if(this.bookMarks.length===0){
//     return undefined
//   }return this.bookMarks[0]
// }

// goToLastBookMark(){
//   if(this.bookMarks.length===0){
//     return undefined
//   }return this.bookMarks[this.bookMarks.length-1]
// }

// getBookMarks(){
//   return this.bookMarks
// }
