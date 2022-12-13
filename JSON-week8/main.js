// function isEmptyObject( obj){
//     // return JSON.stringify(obj)==='{}'
//     return Object.keys(obj).length===0
// }
// const o={}
// console.log(Object.keys(o))
// console.log(Object.values(o))
// console.log(isEmptyObject(o))

const students=[{
    id:64130500047, 
    profile:{
        fullname:{
         firstname:'Panithee', 
         lastname:'Virojwongchai'
        }
    },
    getFullName(){
        return `${this.profile.fullname.firstname},  ${this.profile.fullname.lastname}`
    }
},
{
    id:047, 
    profile:{
        fullname:{
         firstname:'Somchai', 
         lastname:'DeeJai'
        }
    },
    getFullName(){
        return `${this.profile.fullname.firstname},  ${this.profile.fullname.lastname}`
    }
}]

    
const [,{profile:{fullname:{firstname, lastname}}}]=students
console.log(firstname)
console.log(lastname)


// const {id,...studentDetail} = students
// console.log(id)
// console.log(studentDetail)

// const address={
//     houseNo:126,
//     province: "Bangkok"
// }

// const {province,houseNo} = address
// console.log(province)
// console.log(houseNo)

// spread operator(...)
// merge two object properties
// const studentProfile = {...students,...address}
// console.log(studentProfile)

// // replace id
// const newStudent={...students, id:1}
// console.log(newStudent)