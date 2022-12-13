const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  let BMI
  return BMI = weight / (height*height);
  
}

function getBMIMeaning(weight, height) {
  //code here
  let x = calculateBMI(weight,height)
  return (x<18.5) ? "Underweight" : (x>=18.5 && x<=24.9) ? "Normal weight" : "Overweight"
 
}

// console.log(getBMIMeaning(65, 1.8));
// console.log(getBMIMeaning(80, 1.7));
// console.log(getBMIMeaning(44, 1.6));

module.exports = getBMIMeaning
 