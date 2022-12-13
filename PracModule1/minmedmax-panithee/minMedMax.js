const { template } = require("@babel/core");

function minMedMax(n1, n2, n3) {
  //code here
  let num = [n1,n2,n3]
  num = num.sort((a,b) => a-b)
  return {min: num[0], mid: num[1], max: num[num.length-1]}
}

// console.log(minMedMax(85, 30, 1));
// console.log(minMedMax(10, 0, 20));
// console.log(minMedMax(-5, 0, 10));
// console.log(minMedMax(5, 1, 1));
// console.log(minMedMax(-1, -8, 0));

module.exports = minMedMax;
 // if (n1 > n2 && n1 > n3 && n2 > n3) {
  //   return {min: n3, mid: n2, max: n1};
  // } else if (n1 > n2 && n1 > n3 && n3 > n2) {
  //   return {min: n2, mid: n3, max: n1};
  // } else if (n2 > n3 && n2 > n1 && n1 > n3) {
  //   return {min: n3, mid: n1, max: n2};
  // } else if (n2 > n3 && n2 > n1 && n3 > n1) {
  //   return {min: n1, mid: n3, max: n2};
  // } else if (n3 > n1 && n3 > n2 && n1 > n2) {
  //   return {min: n2, mid:  n1, max: n3};
  // } else if (n3 > n1 && n3 > n2 && n2 > n1) {
  //   return {min: n1, mid: n2, max: n3};
  // } else if (n1 === n2 && n1 < n3) {
  //   return {min: n1, mid: n3, max: n3};
  // } else if (n2 === n3 && n2 < n1) {
  //   return {min: n2, mid: n1, max: n1};
  // } else if (n1 === n3 && n1 < n2) {
  //   return {min: n1, mid: n2, max: n2};
  // } else {
  //   return {min: n1, mid: n1, max: n1};
  // }