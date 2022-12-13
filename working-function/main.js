// let value=24/3+5
// console.log(value)

// // annonymous function
// const doSomething = function (x){
//     return x.charAt(0)
// }

// console.log(doSomething("Somchai"))

// // arrrow function
// const doIt = x => x.charAt(0)
// console.log(doIt("hello"))

// 1
// function average(nums){
//     function sum(){
//         let total=0
//         for(const num of nums){
//             total = total + num
//         }
//         return total
//     }
//     return sum()/nums.length
// }

// console.log(average([1,2,3,4,5]))

// 2.
// function average2(nums){
//     return sum2(nums)/nums.length
// }

// function sum2(nums){
//     let total=0
//     for(const num of nums){
//         total = total + num
//     }
//     return total
// }
// console.log(average2([1,2,3,4,5]))
// console.log(sum2([1,2,3,4,5]))

//Thefollowingletvariablesaredefinedintheglobalscope
// let mid = 20
// let final = 5
// let fname = 'Ada'
// // sum function is defined in the global scope
// function sum() {
//     return mid + final
// }
// console.log(`#1 sum: ${sum()}`) // Returns 25
// mid = 10
// console.log(`#2 sum: ${sum()}`) // Returns 15
// function getScore() {
//     let mid = 10
//     let final = 30
// //yourScore is nested function
// function yourScore() {
//     return fname + ' scored ' + (mid + final)
// }
// return yourScore
// }
// const scoreFn=getScore()
// console.log(scoreFn())
// console.log(getScore()())

function outer(x){
    let n=1
    function inner1(y){
        n=n+5
        return x+n+y
    }
    function inner2(z){
        return x+n+z
    }
    return {inner1,inner2}
}

// const o = outer(10)
// console.log(o.inner2(30)) // 41
// console.log(o.inner1(20)) // 36
// console.log(o.inner2(30)) // 46

// Object destructuring
// const {inner1, inner2} = outer(10)
// console.log(inner1(20))
// console.log(inner2(30))


function doSomething(w, x, y, z=40){
    console.log(arguments[0]) //w
    console.log(arguments[1]) //x
    console.log(arguments[2]) //y
    console.log(arguments[3]) //y
    // return w+x+y+z
    let sum=0
    for(const a of arguments){
        sum+=a
    }
    return sum
}
console.log(doSomething(10,20,30))

function sum(num1, num2, num3) {
    console.log(num1)
    console.log(num2)
    console.log(num3)
    return num1 + num2 + num3
    }
    let nums = [5, 20]
    //spread parameter
    console.log(sum(...nums))
