// let product={productId:1, productName:'Pen', price:50}
// //collection of properties //one property contains key and value
// console.log(product)
// console.log(typeof product)

// let studentIds=[123,555,666]
// console.log(typeof studentIds)
// console.log(studentIds.length)
// console.log(studentIds)

// console.log(typeof undefined)

// immutable
// let str = 'hello'
// console.log(str.toUpperCase) 
// console.log(str)
// str=str.toUpperCase() // reassign
// console.log(str)

// // muatable
// let std = {firstname:'Somchai', lastname:'Rakdee'} //primitive value
// std.lastname = 'Deejai'// mutable
// console.log(std)// {firstname:'Somchai, lastname:'Deejai'}

// let scores = [10,25,30,50]
// score[0] = 5 // mutable [5,25,30,50]
// scores[scores.length - 1] = 100 // mutable แบบไม่ hard code
// console.log(scores) //[5,25,30,100]

// let unknowValue = undefined;
// unknowValue;
// // console.log(typeof unknowValue) // typeof Undefined เป็น "undefined"
// if(typeof unknowValue === 'undefined'){ //เทียบประเภท, คำ
//     console.log('variable is undefined')
// }

// unknowValue=null;
// // console.log(typeof unknowValue) // typeof null เป็น object
// if(unknowValue === null){
//     console.log('variable is null')
// }

// unknowValue = undefined;
// if(unknowValue == undefined){
//     console.log('variable is undefined')
// }

// block scope

// var block scope
// for(num=1;num<=5;num++){ 
//     console.log(num)
// }
// console.log('--------')
// console.log(num)


// let value=3
// function doSomething(x){ // ไปทำการเรียก function doSometing()ก่อน
//     value=value+x
//     console.log(value)
// }
// doSomething(10)

// let str='Java Script'
// console.log(str.length)
// console.log(str.charAt(0))
// console.log(str.charAt(str.length-1))
// // template literal

// //backtick
// let op = 'multiply'
// let value = `Operator: ${op}: The result of 5 * 4 = ${5*4} and 5 + 4 = ${5+4}`
// console.log(value)

let items=[1,2]

if(items.length===0) console.log('array is empty')
//if(boolean) true statement else false statement

// Implicit Type Conversions
// const conv1 = 10 + 'rooms' // 10 rooms concat
// const conv2 = '4' * 5 // 20 Type Conversions work
// const conv3 = 'a' - 2 // NAN Type Conversion work
// const conv4 = 'Hello' // false

let result = Number('4')*5
console.log(result)


console.log(`15 ==='15' ${15 ==='15'}`);
