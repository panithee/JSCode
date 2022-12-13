// Method Syntax

// Arrow function
// every((element) => { /* … */ } )
// every((element, index) => { /* … */ } )
// every((element, index, array) => { /* … */ } )

// Function
// let ages =[20,30,22,60]
// function checkAdult(age){
//     return age>=18
// }
// console.log(ages.every(checkAdult))

// / Arrow function
// let positiveNumbers = [1,2,3,4,5,6,7,8]
// const isPositive = number =>{
//     return number>= 0
// } 
// console.log(positiveNumbers.every(isPositive))

// let set =[1,2,3,4,5,6,7,8,9]
// let subset=[2,3,4]
// let not_subset = [3,10,11]
// const issubSet= (arr1,arr2) => arr2.every((element) => arr1.includes(element))
// console.log(issubSet(set,subset))
// console.log(issubSet(set,not_subset))

// // Callback function
// // every(callbackFn)  
// // every(callbackFn, thisArg)
// let months = ["January","February","March","April"]
// let monthFeb = ["February","February","February","February","February"]
// function checkFeb(month){
//    return month === "February"
// }
// console.log(monthFeb.every(checkFeb))
// console.log(months.every(checkFeb))

// // // // Inline callback function
// // // every(function(element) { /* … */ })
// // // every(function(element, index) { /* … */ })
// // // every(function(element, index, array){ /* … */ })
// // // every(function(element, index, array) { /* … */ }, thisArg)

// let negativeNumber = [-5,-4,-3,-2,-1]
// const allNegativeNumber = negativeNumber.every(function (number){
//     return number < 0
// })
// console.log(allNegativeNumber)


// // sprase array
// console.log([1, , 3].every((x) => x !== undefined)); // true
// console.log([2, , 2].every((x) => x === 2)); // true


// let array1 = [1, 2, 3, 4]
// array1.every((elem, index, arr) => {
//   arr[index+1]--;
//   console.log(`[${arr}][${index}] -> ${elem}`);
//   return elem < 2;
// })

// console.log("--------------------------------")

// array2 = [1, 2, 3];
// array2.every((elem, index, arr) => {
//   arr.push('new');
//   console.log(`[${arr}][${index}] -> ${elem}`);
//   return elem < 4;
// })

// console.log("--------------------------------")

// array3 = [1, 2, 3, 4];
// array3.every((elem, index, arr) => {
//   arr.pop();
//   console.log(`[${arr}][${index}] -> ${elem}`);
//   return elem < 4;
// })


// // Array with objects
// let persons = 
// [
//     {name:"Sam", sex:"Male", city:"Bangkok"},
//     {name:"Sarah", sex:"Female",city:"Bangkok"},
//     {name:"Joe", sex:"Male", city:"Bangkok"},
//     {name:"Jack", sex:"Male", city:"Bangkok"},
//     {name:"Susan", sex:"Female", city:"Bangkok"}
// ]

// const allBangkok = persons.every((person) => person.city === "Bangkok")
// const allMale = persons.every((person) => person.sex === "Male")

// console.log(allBangkok)
// console.log(allMale)/

