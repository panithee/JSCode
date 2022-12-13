let arr1=[1,3,5,7,9,true,'Hello']
// console.log(arr1[0])
// console.log(arr1[arr1.length-1])

// for(const arr of arr1){
//     console.log(arr)
// }

// let building={buildingName: 'LX', floor:'11'}

// let colors=[['red', 'orange'],['blue','white','purple']]
// console.log(colors.length)
// console.log(colors[colors.length-1].length) 
// // colors[2-1].lenth//colors[1].length//3


// let colorObj={tone:'warm color', colors:['red', 'orange']}
// let colorsObj=[
//     {tone:'warm color', colors:['red', 'orange']},
//     {tone:'pastel color', colors:['light green','grey']},
//     {tone:'cold color', colors:['blue', 'white','purple']},
// ]
// // call array
// console.log(colorsObj[colorsObj.length-2])
// //Object
// console.log(colorObj)

// objbect = {property key1 : property value1, property key2: property keyvalue2}


// let x=[]
// let y=null
// let z
// console.log(x.length)
// console.log(y?.length)
// console.log(z)

// let x =[1,3,5]
// delete x[0]
// console.log(x.length)
// console.log(x)
// // let y =[...x,7,8,9]
// let y = Array.from(x)
// y[y.length]=7
// y[y.length]=9
// console.log(x)
// console.log(y)

// let z = new Array(5, 4)
// console.log(z)
// console.log(z.length)

// Destructuring assignment สามารถแยกค่าออกมาให้ตัวแปร
// let studentNames=['Somchai','Somsri','Suda','Sakchai']
// let [x, ...names] = studentNames // rest operation
// // ถ้าต้องการลำดับถัดไปให้ใส่ comma ไว้จะ skip ค่า
// // let x=studentNames[0]
// // let y=studentNames[1]
// // let z=studentNames[2]
// console.log(x)
// console.log(names)
// console.log(y)
// console.log(z)

// forOf
let str='Hello'
let letters=[...str]
console.log(letters)
for(const [i,letter] of letters.entries()){
    console.log(`index:${i}, values:${letter}`)
    // console.log(letter)
}

// // function declaring
// function doSomething(x){
//     return x
// }

// // execute function
// console.log(doSomething(10))
// let m=doSomething('Hello World')
// console.log(m)

// let array1 = ['one', 'two', 'three'];
// array1.reverse()
// console.log('array1:', array1);
// const array2 =[1,2,3]
// array1=array1.concat(array2)
// console.log(array1)
// console.log(array2)
// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// console.log(plants.pop())
// console.log(plants.length)
// console.log(plants.push('lemon'))
// console.log(plants)
// console.log(plants.length)