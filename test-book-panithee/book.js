const { template } = require('@babel/core')
//your student id, firstname, and lastname here
// 64130500047, Panithee, Virojwongchai
class Book {
    constructor(isbn, title='untitled',ebook=false){
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
        this.authors = []
    }

    addAuthor(fn, ln){
        this.authors.push({firstname : fn, lastname : ln})
        return this.authors.length
    }

    getFirstAuthor(){
        return this.authors[0]
    }

    getCoAuthors(){
        return this.authors.slice(1, this.authors.length)
    }

    findAuthor(firstname, lastname){
        return this.authors.find(fn => fn.firstname.toLowerCase() === firstname.toLowerCase() && fn.lastname.toLowerCase() === lastname.toLowerCase())
    }

    hasEbook(){
        return this.ebook
    } 
}

module.exports = Book
