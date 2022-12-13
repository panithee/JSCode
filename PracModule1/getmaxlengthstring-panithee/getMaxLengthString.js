const { template } = require("@babel/core");

function getMaxLengthString(arrayOfString) {
  if(arrayOfString === null || arrayOfString === undefined){
    return undefined;
  }
  let maxLengthStr = []
  for(let arr of arrayOfString){
      if(maxLengthStr.length===0){
        maxLengthStr = [arr]
      }else if(arr.length >= maxLengthStr[0].length){
        if(arr.length === maxLengthStr[0].length){
          maxLengthStr.push(arr)
        }else{
          maxLengthStr = [arr]
        }
      }
  }
  return maxLengthStr
}

getMaxLengthString(['hello', 'world'])

module.exports = getMaxLengthString;


// if (arrayOfString === null || arrayOfString === undefined) return undefined

  //Sol.1
  // let maxLength = arrayOfString[0].length
  // const maxString = []
  // arrayOfString.forEach((eachString) => {
  //   if (eachString.length > maxLength) maxLength = eachString.length
  // })
  // arrayOfString.forEach((eachString) => {
  //   if (eachString.length === maxLength) maxString.push(eachString)
  // })

  // return maxString

  //Sol.2
  // arrayOfString.sort((a, b) => a.length - b.length)
  // const maxLength = arrayOfString[arrayOfString.length - 1].length
  // return arrayOfString.filter((str) => str.length === maxLength)
