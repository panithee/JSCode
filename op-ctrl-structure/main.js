//array
// const items=['coca-cola', 'pepsi', 'soda'] // เปลี่ยนค่าได้แต่เปลี่ยนตำแหน่งไม่ได้
// // for..of (array, string)
// for(const item of items){
//     console.log(item)
// }


// // items[0] = 'fanta'
// // items = x
// // console.log(items)
// // console.log(arr?.[1])
// // console.log(items?.[0])

// //object
// const student={id:64130500047, firstname:'Panithee', lastname:'Viro'}
// for..in (object)
// for(const prop in student){
//     console.log(student[prop])
//     //objectname.propertyKey //objectName[propertyKey]
// }
// const str='hello world'
// for(s of str){
//     console.log(s)
// }

// let obj
// console.log(obj?.id)
// console.log(student?.id)

//nullish coalesching

// let x
// console.log(x??10)
// let arr=['coca-cola']
// arr = arr??[]
// console.log(arr)

// for..in (object)
// for..of (array, string)
// forEach

// let num=1
// let grade
// switch (num) {
//     case 1: grade='A'
//             break
//     case 2: grade='B'
//             break
//     case 3: grade='C'
//             break      
        
//     default: grade='F'
//         break;
// }

// function doSomething (weight, height){
//     // code here
// }

function isEvenNumber(num){
   return num%2==0?true:false
} 

console.log(isEvenNumber(2))
console.log(isEvenNumber(5))