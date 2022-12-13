import {students} from "./data/students.js"
import {lecturers} from "./data/lecturers.js"
console.log(students)
console.log(lecturers)

const divButtonPanel = document.getElementById('buttonPanel')
console.log(divButtonPanel)

const studentButton=divButtonPanel.children[0]
console.log(studentButton)

const lecturerButton = divButtonPanel.children[1]
console.log(lecturerButton)

// function studentButtonHandler(){
//     const ulParentElement = document.querySelector('ul')
//     ulParentElement.textContent = ""
//     // console.log(ulParentElement)
//     for(let i=0; i<students.length; i++){
//         const liElement = document.createElement('li')
//         liElement.textContent = `ID: ${students[i].id}, name: ${students[i].name}`
//         ulParentElement.appendChild(liElement)
//     }
// }

// studentButton.addEventListener('click', studentButtonHandler, false)

// function lecturerButtonHandler(){
//     const ulParentElement = document.querySelector('ul')
//     ulParentElement.textContent = ""
//     // console.log(ulParentElement)
//     for(let i=0; i<lecturers.length; i++){
//         const liElement = document.createElement('li')
//         liElement.textContent = `ID: ${lecturers[i].id}, name: ${lecturers[i].name}`
//         ulParentElement.appendChild(liElement)
//     }
// }

// lecturerButton.addEventListener('click', lecturerButtonHandler, false)

function studentButtonHandler(event){      
    dataButtonHandler(students)
}
// studentButton.addEventListener('click', studentButtonHandler)
studentButton.addEventListener('click', dataButtonHandler)
function lecturerButtonHandler(e){
    dataButtonHandler(lecturers)
}
// lecturerButton.addEventListener('click',lecturerButtonHandler)
lecturerButton.addEventListener('click',dataButtonHandler)
function dataButtonHandler(event){
    const ulParentElement=document.querySelector('ul')
    ulParentElement.textContent=''//<ul></ul>
    const items=Number(event.target.id)===1?students:lecturers
    items.forEach(item => { //each element in array
        for (const key in item) { //each property of object
            const liElement=document.createElement('li')
            liElement.textContent=`${key} ${item[key]}`
             ulParentElement.appendChild(liElement)                          
        }
    });
}
    

// function dataButtonHandler(items){
//     const ulParentElement = document.querySelector('ul')
//     ulParentElement.textContent = "" // <ul></ul>
//     // console.log(ulParentElement)
//     for(let i=0; i<items.length; i++){
//         const liElement = document.createElement('li')
//         liElement.textContent = `ID: ${items[i].id}, name: ${items[i].name}`
//         ulParentElement.appendChild(liElement)
//     }
// }




// // addevent handler function by using anonymous function
// studentButton.addEventListener("click", () => {
//     alert('Hello, student button')
// })

// function studentButtonHandler(){
//     alert("2nd function handler for student button")
// }
// studentButton.addEventListener('click', studentButtonHandler, false)
// studentButton.removeEventListener('click', studentButtonHandler, false)

// // function expression (arrow function)
// const divButtonHandler = () =>{
//     alert('Hi, Div Button Panel')
// }

// // add event handler function by using function name
// divButtonPanel.addEventListener("click", divButtonHandler, false)

