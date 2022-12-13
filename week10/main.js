const students=[{id:1, name:'Somchai'}, 
                {id:2, name:'Somsri'}, 
                {id:3, name:'Chujai'}]

// studentIds=[{id:1}, {id:2}, {id:3}]
// const studentIds = []
// // students.forEach(student => studentIds.push(student.id))
// // console.log(studentIds)

// students.forEach(student => studentIds.push({id:student.id}))
// console.log(studentIds)

// map
// const studentsId2 = students.map(student => student.id)
// console.log(studentsId2)

// const studentId3 = students.map(student => student.id+1)
// console.log(studentId3)

// const nums = [5,4,100,-1,0,2,10]
// const maxNum = nums.reduce((max,num) => Math.max(max,num))

// console.log(maxNum)

// const months = ['Jan', 'March', 'April', 'June']
//replace at 1 with new two elements
// months.splice(1, 2, 'A', 'B')
// console.log(months)
//[ 'Jan', 'A', 'B', 'June' ]
//remove at 1 for two elements
// months.splice(1,2)
// console.log(months)
// [ 'Jan', 'June' ]
//insert at index:1 with values 'A', 'B'
// months.splice(1, 0, 'A', 'B')
// console.log(months)
// [ 'Jan', 'A', 'B', 'March', 'April', 'June' ]

const nums=[100000,15,20,2000,1]
console.log(nums.sort())
//[ 1, 100000, 15, 20, 2000 ]
console.log(nums.sort((a,b)=> a-b ))
//[ 1, 15, 20, 2000, 100000 ]
console.log(nums.sort((a,b)=> b-a ))
//[ 100000, 2000, 20, 15, 1 ]