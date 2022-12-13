const addition = function (n1,n2){
    return n1+n2
}

// arrow functions
const afAddition = (n1,n2) => n1+n2
console.log(afAddition(10,20))

const additon2 = (n1,n2)=>{
    let sum = n1+n2
    return sum
}
console.log(additon2(10,20))

const getMsg=msg => msg //return msg
console.log(getMsg('Hello'))


function solution(str){
    const x = str.split("")
    x.reverse()
    const y = x.join("")
    return y
   }

   console.log(solution("Hello"))
