import {students} from './data/students.js'
import {lecturers} from './data/lecturers.js'

const divButtonPanel = document.getElementById('buttonPanel')
const studentsChild = divButtonPanel.children[0]
console.log(studentsChild)
const lecturersChild = divButtonPanel.children[1]

function studentsButtonHandler(){
    const ulParentElement = document.querySelector('ul')
    ulParentElement.textContent = ""
    for(let i=0; i<students.length; i++){
        const liElement = document.createElement('li')
        liElement.textContent = `{id: ${students[i].id}, name: ${students[i].name}}`
        ulParentElement.appendChild(liElement)
    }
}

function lecturersButtonHandler(){
    const ulParentElement = document.querySelector('ul')
    ulParentElement.textContent = ""
    for(let i=0; i<students.length; i++){
        const liElement = document.createElement('li')
        liElement.textContent = `{id: ${lecturers[i].id}, name: ${lecturers[i].name}}`
        ulParentElement.appendChild(liElement)
    }
}


studentsChild.addEventListener('click', studentsButtonHandler, false)
lecturersChild.addEventListener('click', lecturersButtonHandler, false)