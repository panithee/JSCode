// console.log('Panithee Virojwongchai')
// console.log('INT201 Client Side Programming')
// setTimeout(function cb(){
//     console.log("Vanila JavaScript")
// }, 5000)
// setTimeout(fn, millisecond)
// console.log('Hello World')
// console.log('Good bye')

function add(n1, n2) {
  return n1 + n2;
}
// console.log(add(10, 20));

// 1.Can assign function to variable
// let sum = add;
// console.log(sum(20, 30));
// console.log(typeof sum);

// 2.Can assign function to parameter
function multiply(n1, n2) {
  return n1 * n2;
}
function divide(n1, n2) {
  return n1 / n2;
}
function subtract(n1, n2) {
  return n1 - n2;
}
function calculator(n1, n2, oper) {
  return oper(n1, n2);
}
console.log(calculator(50, 20, add));
console.log(calculator(50, 20, subtract));
console.log(calculator(50, 20, multiply));
console.log(calculator(50, 20, divide));

// 3.Can return function as a result of another function

// function saySomething(msg) {
//   return msg;
// }

// function doSomething() {
//   return saySomething;
// }

// let doIt=doSomething(); // let doIt=saySomething
// console.log(typeof doIt);
// console.log(doIt("Hello World")); // it's a function.

// let num1 = 10;
// let num2 = 20.57;
// let num3 = 1n;

// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof num3);

// let str1 = "Hello"; //single quote
// let str2 = "Good bye"; //double quote
// let str3 = `Greeting with ${str1} and say goodbye with ${str2}`; //backticks
// console.log(str1);
// console.log(str2);
// console.log(str3);
// let aLetter = "\u0041";
// console.log(aLetter);
// let emoji = String.fromCodePoint("0x1F603");
// console.log(emoji);

// //boolean
// let absent = true;
// let leave = false;
// console.log(typeof absent); //typeof ให้ผลตัวพิมพ์เล็ก
// console.log(typeof leave);

// //symbol
// let sym1 = Symbol("id"); //String เหมือกันแต่พอใส่ Symbol ทำให้หน้าตาไม่เหมือนกัน
// let sym2 = Symbol("id");
// console.log(typeof sym1);
// console.log(typeof sym2);
// console.log(sym1 === sym2);

// //null รอ address
// let unknownObj = null;
// console.log(typeof unknownObj); //type ของ null เป็น Object

// //undefined ไม่มีการ assign ค่า
// let unAssign = undefined;
// let x;
// console.log(typeof unAssign);
// console.log(typeof x);
// console.log(x);

// //object
// let student = {
//   stdId: 64130500047,
//   firstname: 'Panithee',
//   lastname: 'Virojwongchai',
//   absent:false
// };
// //{key:value, key:value, key:value}
// student.lastname="Virojwong"
// console.log(typeof student);
// console.log(student);
// let students=['Somsri', 'Sompong', 'Somsak']
// students[0] = 'Sakchai';
// console.log(typeof students);
// console.log(students);

// function add(){
// }
// console.log(typeof add);