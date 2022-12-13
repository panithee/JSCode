// // Object in javascript is prototype based
// // 1.object literals
// let address={houseNo:126, province:"Bangkok"}
// // let address = new Object()
// console.log(address)
// console.log(Object.prototype.isPrototypeOf(address))

// // 2. New operator
class Square {
  constructor(s) {
    this.side = s;
  }
  area() {
    return this.side * this.side * this.side;
  }
  isEqual(anotherSquare) {
    return this.side === anotherSquare.side;
  }
}

const square1 = new Square(2);
square1.side = 10;
console.log(square1.area());

let square2 = new Square(5);
square2.side = 20;
console.log(square2.area());

console.log(square1.isEqual(square2));

function perimeter() {
  return this.side * 4;
}

square2.squareperimeter = perimeter;
console.log(`square perimeter = ${square2.squareperimeter()}`);
// let profile = {
//     id:123,
//     interests: ["music","skiiing"]
// }

// // profile.interests[0]='reading'
// // profile["interests"]

// console.log(profile["interests"][0])

// let book = {isbn:123456789,
//     title: 'Javascript',
//     author: {
//         firstname: 'Umaporn',
//         lastname: 'Sup'
//     },
//     // getBook: function(){
//     getBook(){
//         return `book title:${this.title},
//         author:${this.author.firstname} ${this.author.lastname}`
//     }
// }
// book.author.firstname='Suda'
// book.author.lastname='Deejai'
// console.log(book.author["firstname"])
// console.log(book.author["lastname"])

// function multiply(a, b = 1) {
//     return a * b;
//   }

//   console.log(multiply(5, 2));
//   // expected output: 10

//   console.log(multiply(5,null));
//   // expected output: 5

// let square1={
//     side:2,
//     area(){
//         return this.side*this.side
//     }
// }

// let square2={
//     side:5,
//     area(){
//         return this.side*this.side*this.side
//     }
// }

let book = {
  isbn: 123456789,
  title: "JavaScript",
  author: {
    firstname: "Umaporn",
    lastname: "Sup",
  },
}

const bookKeys = Object.keys(book);
console.log(bookKeys);
const bookValues = Object.values(book);
console.log(bookValues);

class Subject {
    constructor(title='untitle'){
        this.title=title
    }
    getTitle(){
        return this.title
    }
}

let subject = new Subject('Client Side I')

let lectureSubject=Object.create(subject)
lectureSubject.lectureHours=2

console.log(lectureSubject)
console.log(lectureSubject.title)

// // prototype chaining
console.log(Object.prototype.isPrototypeOf(lectureSubject))
console.log(Subject.prototype.isPrototypeOf(lectureSubject))