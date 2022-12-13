import {students} from './data/students.js'
import {lecturers} from './data/lecturers.js'

console.log(students)
console.log(lecturers)

const divButtonPanel = document.getElementById("buttonPanel")
console.log(divButtonPanel)

const studentButton = divButtonPanel.children[0]
console.log(studentButton)

const lecturerButton = divButtonPanel.children[1]
console.log(lecturerButton)

function studentButtonHandler(){
    const ulParentElement = document.querySelector('ul')
    ulParentElement.textContent = ''
    // console.log(ulParentElement)
    for(let i=0; i<students.length; i++){
        const liElement = document.createElement('li')
        liElement.textContent = `ID: ${students[i].id}, Name: ${students[i].name}`
        ulParentElement.appendChild(liElement)
    }
}

function lecturerButtonHandler(){
    const ulParentElement = document.querySelector('ul')
    ulParentElement.textContent = ''
    // console.log(ulParentElement)
    for(let i=0; i<lecturers.length; i++){
        const liElement = document.createElement('li')
        liElement.textContent = `ID: ${lecturers[i].id}, Name: ${lecturers[i].name}`
        ulParentElement.appendChild(liElement)
    }
}


studentButton.addEventListener('click', studentButtonHandler)
lecturerButton.addEventListener('click', lecturerButtonHandler)

// const divButtonHandler =()=>{
//     alert('Hi, Div Button Panel')
// }
// divButtonPanel.addEventListener('click', divButtonHandler, true)