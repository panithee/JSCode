const todoManagement = require('../lib/todoManagement.js')
const todoUserInterface = require('../UI/todoList.js')

// import {todoManagement} from '../lib/todoManagement.js'
// import {todoUserInterface} from '../UI/todoList.js'

const {addTodo,removeTodo,findTodo,getTodos,getNumberOfDone,getNumberOfNotDone,setItemToDone} = todoManagement()
const {showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem} = todoUserInterface()

function addTodoHandler(){
    const todoItem = document.querySelector('input').value
    if(todoItem.trim().length !== 0){
      const todoId = addTodo(todoItem)
      showTodoItem(todoId, todoItem)
      addButtonHandler(todoId)
      showNumberOfDone(getNumberOfDone())
      showNumberOfNotDone(getNumberOfNotDone())
    }
}

const addButtonHandler = (todoId) => {
    document.getElementById(todoId).children[1].addEventListener('click', notDoneButtonHandler)
    document.getElementById(todoId).children[2].addEventListener('click', removeButtonHandler)
    document.querySelector('input').value = ''
}

const notDoneButtonHandler = (event) => {
    const notDoneButtonFire = event.target
    console.log(notDoneButtonFire)
    notDoneButtonFire.textContent = 'Done'
    notDoneButtonFire.style = 'background-color: green;color: white'
    setItemToDone(notDoneButtonFire.parentElement.getAttribute('id'))
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())

}

const setdoneStyle = (doneButtonFire) => {
    
}

const removeButtonHandler = (event) => {
    const removeButtonFire = event.target
    const removeId = removeButtonFire.parentElement.getAttribute('id')
    removeTodoItem(removeId)
    removeTodo(Number(removeId))
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
}

  
module.exports = {addTodoHandler,addButtonHandler,notDoneButtonHandler,setdoneStyle,removeButtonHandler}
// export {addTodoHandler,addButtonHandler,notDoneButtonHandler,setdoneStyle,removeButtonHandler}