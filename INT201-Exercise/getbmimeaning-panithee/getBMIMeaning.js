const { template } = require('@babel/core')
// d
function calculateBMI(weight, height) {
  //code here
  let BMI
  return BMI = weight / (height*height);
  
}

function getBMIMeaning(weight, height) {
  //code here
  let getBMIMean = calculateBMI(weight,height)
  if (getBMIMean< 18.5) {
    return "Underweight";
  } else if (getBMIMean> 18.5 && getBMIMean<24.9) {
    return "Normal weight";
  } else if(getBMIMean >25.0) {
    return "Overweight";
  }
}

// console.log(getBMIMeaning(65, 1.8));
// console.log(getBMIMeaning(80, 1.7));
// console.log(getBMIMeaning(44, 1.6));

module.exports = getBMIMeaning
 