// 1
let ed = ['']
ed = ed??[1,2]
console.log(ed?.length)

// 2 ข้อใดเป็นนิพจน์
// null, undefined, Math.Pi

// 3 Nullish
let z 
z = z??['Good Evening']
console.log(z[0])

// 4. block scope


// 5. function high order function
function add(n1,n2){
    return n1+n2
}
function random(n1){
    return n1+Math.random()
}


// 6. ตัวแปร
// let block
// let 1num
// let pri-VarDate
// let _wweew = 1;
// console.log(_wweew)

// 7. doSomething
function saySomething(){
    return 'Hello, JS'
}
function doSomething(){
    return saySomething
}

let doIt=doSomething
console.log(doIt())

// 8
function fck(){
    console.log("hello")
}

fck

console.log(typeof Math.max())
console.log(typeof 3)