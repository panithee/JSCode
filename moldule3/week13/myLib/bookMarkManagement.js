// const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
// 64130500047, Panithee Virojwongchai
export class BookMark {
  constructor(isbn, totalPages = 0) {
    this.bookMarks =[]
    this.totalPages = totalPages
    this.isbn = isbn
  }

  addBookMark(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.bookMarks.push(pageNumber)
    }
    return this.bookMarks.length
  }
  
  removeBookMark(pageNumber){
    if(this.bookMarks.includes(pageNumber)) {
      this.bookMarks = this.bookMarks.filter(page => page!=pageNumber)
      return pageNumber
    }else{
      return undefined
    }
  }
  goToFirstBookMark() {
    if (this.bookMarks.length <= 0) {
      return undefined
    }
    return this.bookMarks[0];
  }

  goToLastBookMark(){
    if(this.bookMarks.length<=0) return undefined
    return this.bookMarks[this.bookMarks.length-1];
  }

  getBookMarks(){
    return this.bookMarks
  }
  

}


// module.exports = BookMark
