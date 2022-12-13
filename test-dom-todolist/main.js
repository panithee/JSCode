const todoManagement = require("./lib/todoManagement")
const todoUserInterface = require("./UI/todoList")

// import { todoManagement } from "./lib/todoManagement.js";
// import { todoUserInterface } from "./UI/todoList.js";
// import {addTodoHandler,addButtonHandler,notDoneButtonHandler,setdoneStyle,removeButtonHandler} from "./eventHandler/eventController.js";

const {addTodo,removeTodo,findTodo,getTodos,getNumberOfDone,getNumberOfNotDone,setItemToDone} = todoManagement()
const {showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem} = todoUserInterface()


const addButton = document.getElementById('addBtn')
addButton.addEventListener('click', () => addTodoHandler())

// const inputTodo = document.querySelector('input')
// inputTodo.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter') addTodoHandler()
// })
