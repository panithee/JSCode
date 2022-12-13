// function isImageFileExtension(fileName){
//     if(fileName===undefined || fileName===null){
//         return false
//     }s

//     if(fileName.includes('.jpg') ||
//     fileName.includes('.jpeg') ||
//     fileName.includes('.svg')||
//     fileName.includes('.png') ||
//     fileName.includes('.gif') ||
//     fileName.includes('.doc') ||
//     fileName.includes('.pdf')
//     ){
//         return true
//     }return false

// }
// console.log(isImageFileExtension("sample.jpg"))
// console.log(isImageFileExtension("sample.jpeg"))
// console.log(isImageFileExtension("sample.svg"))
// console.log(isImageFileExtension("sample.png"))
// console.log(isImageFileExtension("sample.gif"))
// console.log(isImageFileExtension("sample.doc"))
// console.log(isImageFileExtension("sample.pdf"))
// console.log(isImageFileExtension(null))
// console.log(isImageFileExtension(undefined))

// function is_array(array){
//     if(Array.isArray(array)){
//         return true
//     }return false
// }

// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));

// function array_Clone(clone){
//     return clone.slice(0)
// }

// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// function first(arr,n){
//     if(arr===null || arr===undefined){
//         return 0;
//     }
//     if(n===null){
//         return arr[0]
//     }
//     if(arr.length===0){
//         return []
//     }

//     return arr.slice(0,n)
// }

// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// function last(array, n) {
//   if (array === null) return void 0;
//   if (n === undefined) return array[array.length - 1];
//   return array.slice(Math.max(array.length - n, 0));
// }

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

// let myColor = ["Red","Green","White","Black"]

// console.log(myColor.toString())
// console.log(myColor.join())
// console.log(myColor.join('+'))

// var arr1=[3, 8, 7, 6, 5, -4, 3, 2, 1]
// console.log(arr1.sort())

// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// let mf = 1;
// let m = 0;
// let item;
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = i; j < arr1.length; j++) {
//     if (arr1[i] == arr1[j]) m++;
//     if (mf < m) {
//       mf = m;
//       item = arr1[i];
//     }
//   }
//   m = 0;
// }
// console.log(`${item} ( ${mf} times ) `);

// let letters ="The Quick Brown Fox"
// let e

// for(let i=0;i<letters.length;i++){
//     if(letters[i]===letters[i].toLowerCase()){
//         letters = letters.toUpperCase()
//     }else{
//         letters = letters.toLowerCase()
//     }
//     console.log(letters[i])
// }


// function solution(str){
//     const x = str.split("")
//     x.reverse()
//     const y = x.join("")
//     return y
//    }

//    console.log(solution("Hello"))

//  function removeChar(str){
//     let x = str.split("")
//    x.shift()
//    x.pop()
//     return x
//  };

//  console.log(removeChar("Hello"))
   
//  function abbrevName(name){

//    // code away
//    return name.split(" ").map(el => el[0].toUpperCase()).join(".")
// }

// console.log(abbrevName("Sam Dmith"))
   
// const reverseSeq = n => {
//    let x =[]
//    for(let i=1 ; i<=n ; i++){
//      x.push(i)
//    }
//    let d = x.reverse()
//    return d 
//  }
//  console.log(reverseSeq(5))

//  function smash (words) {
//    return words.join(" ")
   
//  };

//  console.log(smash(['Hello','World']))

// function highAndLow(numbers){
//    // ...
//    let min = Math.min(numbers)
//    let max = Math.max(numbers)
   

//  }
//  console.log(highAndLow("1 2 3 4 5"))


// function minMax(arr){
//     //   return [0,0]; // fix me!
//     return [Math.min(...arr), Math.max(...arr)];
// }
 
// console.log(minMax([1,2,3,4]))

// function accum(str) {
//     var letters = str.split('');
//     console.log(letters)
//     var result = [];
//     for (var i = 0; i < letters.length; i++) {
//       result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
//     }
//     return result.join('-');
//   }

// console.log(accum("abcde"))

// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

// function giveMeFive(obj){
//     let x=[]
//     for(let loop in obj){
//       if(loop.length===5){
//         x.push(loop)
//       }
//       if(obj[loop].length===5){
//         x.push(obj[loop])
//       }
//     }
//     return x
// }
// console.log(giveMeFive({id:"12345", name:"Somci"}))


// var number = function(busStops){
//     let sum = 0
//     for(let num of busStops){
//        sum += num[[0]]
//        sum -= num[[1]]
//     }
//     return sum
//   }
//   console.log(number([[3,2],[4,2],[5,3]]))

// function countPositivesSumNegatives(input) {
//     let positive=0
//     let negative=0
//     for(let i=0;i<input.length;i++){
//       if(input[i]>=0){
//         positive = positive + 1
//       }
//       if(input[i]<0)
//         negative = negative + input[i]
//       }
//     return [positive, negative]
// }
// console.log(countPositivesSumNegatives([1,2,3,4,-1,-3,-4]))

// var isSquare = function(n){
//     let x=Math.sqrt(n)
//     if(Number.isInteger(x)) return true
//     return false
// }

// console.log(isSquare(3))
// console.log(isSquare(25))
// console.log(isSquare(-3))

// function lovefunc(flower1, flower2){
//     return ((flower1%2===0 && flower2%2 !== 0)||(flower1%2 !==0 && flower2%2 === 0))
//   }
// console.log(lovefunc(4,5))
// console.log(lovefunc(2,2))

// function sortByLength (array) {
//     return array.sort((a,b) => a.length - b.length);
// }

// console.log(sortByLength(["G","Gee","A"]))

// function DNAStrand(dna){
//     const x = dna.split(" ")
//     console.log(x)    
//   }

//   console.log(DNAStrand("GTCC"))

// var number = function(array) {
//   return array.map(function (line, index) {
//     return (index + 1) + ": " + line;
//   });
// }


// console.log(number(["a","b","c"]))


// function index(array, n){
//   if(array.length-1>=n) return Math.pow((array[n]),n)
//   if(array.length-1<n) return -1
// }

// console.log(index([1,2,3,4],3))

// function XO(str) {
//   let x = str.split("")
//   console.log(x=[...str])
//   let sumx = 0
//   let sumo = 0
//   for(let i =0; i<x.length;i++){
//     if(x[i].toLowerCase()==="x") {
//       sumx += 1
//     }
//     if(x[i].toLowerCase()==="o") {
//       sumo += 1
//   }
//   }
//   return sumx===sumo
// }

// console.log(XO("xoxoxo"))
// console.log(XO("xoXoxO"))
// console.log(XO("cdcdCD"))

// function doubleChar(str) {
//   let x =[...str]
//   console.log(x)
//   let y=x.map(d => d+d)
//   console.log(y)
//   return y.join("")
// }

// console.log(doubleChar("1234"))
// console.log(typeof doubleChar("1234"))

// const binaryArrayToNumber = arr => {
//   let sum = 0
//   let sqrt = arr.length-1
//   for(let i=0 ;i<arr.length ;i++){
//     if(arr[i]===1){
//       sum += 2**sqrt
//     }
//     sqrt--
//   }
//   return sum
//   // return arr.reduce((value,sum,index,arr) => value + (sum*Math.pow(2,arr.length-1-index)));
// };
// // console.log(2**0)
// console.log(binaryArrayToNumber([1,0,0,0]))
// console.log(binaryArrayToNumber([1,0,0,1]))


// function squareDigits(num){
//   let x = num.toString()
//   let y = [...x]
//   let z = y.map(square => square**2).join("") 
//   return Number(z)
// }
// squareDigits(1234)

// function findEvenIndex(arr){
  
// }


// String.prototype.toAlternatingCase = function () {
//     return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
// }



