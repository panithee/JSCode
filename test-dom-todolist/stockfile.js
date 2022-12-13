// const notDoneButton = document.getElementById(id).children[1];
// notDoneButton.addEventListener("click", statusListener(id), false);

// const statusListener = (id) => () => {
//     const notDoneButton = document.getElementById(id).children[1];
//     if (findTodo(id).done) {
//         findTodo(id).done = false
//         notDoneButton.innerText = 'Not Done'
//     } else {
//         findTodo(id).done = true
//         notDoneButton.innerText = 'Done'
//     }
//     console.log(findTodo(id))
//     updateStatus()
// }

// let updateStatus = () => {
//     showNumberOfDone(getNumberOfDone())
//     showNumberOfNotDone(getNumberOfNotDone())
// }

// const removeHandler = function (id){
//   return function(){
//         removeTodo(id)
//         removeTodoItem(id)
//         updateStatus()
//     }
// }



// function addTodoHandler() {
//   const inputElement = document.querySelector("input");
//   const id = addTodo(inputElement.value);
//   showTodoItem(id, inputElement.value);
//   showNumberOfDone(getNumberOfDone());
//   showNumberOfNotDone(getNumberOfNotDone());

//   const notDoneButton = document.getElementById(id).children[1];
//   notDoneButton.addEventListener("click", statusListener(id), false);

 
  
//   const removeButton = document.getElementById(id).lastElementChild 
//   removeButton.addEventListener("click",removeHandler(id), false); 
// }