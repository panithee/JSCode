// // // Assign function to parameter

// // // function add(n1,n2){
// // //     return n1+n2
// // // }
// // // function subtract(n1,n2){
// // //     return n1-n2
// // // }
// // // function multiply(n1,n2){
// // //     return n1*n2
// // // }
// // // function divide(n1,n2){
// // //     return n1/n2
// // // }

// // // function calculator(n1,n2 ,oper){
// // //     return oper(n1,n2)
// // // }

// // // function triArea(n1,n2){
// // //     return 1/2*(n1*n2)
// // // }

// // // console.log(calculator(20,50,add))
// // // console.log(calculator(20,50,subtract))
// // // console.log(calculator(20,50,multiply))
// // // console.log(calculator(20,50,divide))
// // // console.log(calculator(20,50,triArea))

// // // Return function as a result of another function

// // // function saySomething(msg){
// // //     return msg
// // // }

// // // function doSomething(){
// // //     return saySomething
// // // }

// // // let doIt=doSomething()

// // // console.log(typeof doIt)
// // // console.log(doIt(123+"hello"))


// // let num1 = 10
// // let num2 = 20.57
// // let num3 = 1n

// // console.log(typeof num1)
// // console.log(typeof num2)
// // console.log(typeof num3)


// // let str1='Hello' // single quote
// // let str2="Good bye" // double quote
// // let str3=`Greeting with ${str1} and say goodbye`//backticks


// // console.log(str3)
// // let aLetter='\u0041'
// // console.log(aLetter)

// // let emoji=String.fromCodePoint('0x1F603')
// // console.log(typeof emoji)

// // // boolean
// // let absent=true
// // let leave=false
// // console.log(typeof absent)
// // console.log(typeof leave)

// // //symbol
// // let sym1=Symbol('id')
// // let sym2=Symbol('id')
// // console.log(typeof sym1)
// // console.log(typeof sym2)
// // console.log(sym1===sym2)

// // // null
// // let unknownObj = null
// // console.log(typeof unknownObj)

// // // undefined
// // let unAssign=undefined
// // let x
// // console.log(typeof unAssign)
// // console.log(typeof x)
// // console.log(x)

// // object
// // let student={stdId:64130500, firstname:'Panithee', lastname:'Viro', absent:false}
// // // {key:value, key:value, key:value,...}
// // student.lastname='Jaidee'
// // console.log(typeof student)
// // console.log(student)

// // let students = ['Somsri', 'Sompong', 'Somsak']
// // students[0] = 'Sakchai'
// // console.log(typeof student)
// // console.log(students)

// // let product={productId:1, productName:'Pen', price:50}
// // // collection of properties // one property contains key:value
// // console.log(product)
// // console.log(typeof product)

// // let studentIds=[123,555,666]
// // console.log(typeof studentIds)
// // console.log(studentIds.length)
// // console.log(studentIds)
// // console.log(studentIds[studentIds.length-1])

// //immutable
// // let str='Hello, world'
// // str=str.toUpperCase() // ต้องเอาตัวแปรเดิมมาเก็บค่าใหม่ เนื่องจากมันเป็น immutable

// // console.log(str)

// // // mutable
// // let std ={firstname: 'Somchai', lastname:'rakdee'}

// // let x
// // console.log(typeof x )
// // if(typeof x === null){
// //     console.log("It's undefined")
// // }else{
// //     console.log("Not things")
// // }

// // let num
// // for(num=1;num<=5;num++){
// //     console.log(num)
// // }

// // console.log(num)


// // let value=3
// // function doSomething(x){
// //     value=value+x
// //     console.log(value)
// // }
// // doSomething(10)


// // let str='Java Script'
// // console.log(str.length)
// // console.log(str.charAt(0))
// // console.log(str.charAt(str.length-1))

// // let op = 'Multiply'
// // let value=`Operator: ${op}: The result of 5 * 4 = ${5*4} and 5 + 4 = ${5+4}`
// // console.log(value)

// // let items=[]
// // if(items.length===0){
// //     console.log("empty array")
// // }
// //if(boolean) true statement else false statement

// // let result = Number('4')*5
// // console.log(result)


// // array
// // let items=['coca-cola', 'pepsi', 'soda']
// // let arr
// // console.log(arr?.[1])
// // console.log(items?.[0])
// // object
// let student={id:64130500, firstname:'Somchai'}
// let obj
// console.log(obj?.id)
// console.log(student?.id)

// // let x 
// // console.log(x??10)

// let arr=['coca-cola']
// arr = arr??[]
// console.log(arr)

// for..in
// for..of
// forEach

// let nums=[1,3,5,7,9, true, 'Hello World']
// console.log(nums[0])
// console.log(nums[nums.length-1])

// for(const num of nums){
//     console.log(num)
// }

// let a=[]
// let b=null
// let c
// let d=[1,2,3]

// console.log(a.length)
// console.log(d.length)
// console.log(c?.length)
// console.log(b?.length)

// let a=[5,10,15]
// let b=Array.from(a)
// console.log(b)
// let c=Array.of('HelloWorld','Good Morning')
// console.log(c)


// delete c[0]
// delete c[1]
// console.log(c)

// let arr1=['hello world', 'Good night', 'Good Moring']
// let [, greeting1, greeting2, ...otherGreeeting]=arr1

// console.log(greeting1)
// console.log(greeting2)
// console.log(otherGreeeting)

// let a =[5,7,9]
// let b = [3,...a,11]
// console.log(b)

// let arr1=['Ant','Book','Cater']
// let arr2=['Big','Chick','Gig']

// for(const iterator of arr1){
//     console.log(iterator.next().value)
// }

const arr1 = [,"Nice","Good","Bad"]
const arr2 = ["Hello","bye","hi"]
const arr3 = [1,2,3,4,5,6,10,22,23]
// const arr3 = arr1.concat(arr2)
// console.log(arr3)

// console.log(arr1.copyWithin(0,3,4))

// for(const [index, text] of arr2.entries()){
//     console.log("index : "+ index, "Word : "+text)
// }



// console.log(arr1.fill("Excellent",1,3))
// let result = arr1.filter(arr1 => arr1.length>3)
// console.log(result)

// const found = arr3.find(element => element > 10);

// console.log(found);

// const hello = (element) => element>10;
// console.log(arr3.findIndex(hello))


const arr4 = [0, 1, 2, [[[3, 4]]]];

console.log(arr4.flat(3));
// expected output: [0, 1, 2, [3, 4]]

const arr5 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr5.flatMap(num => num);

console.log(flattened);
// expected output: Array [1, 2, 3, 4, 5, 6]