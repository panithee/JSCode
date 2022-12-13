function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    const newPElement = document.createElement("p")
    newPElement.textContent = newDescription
    const firstButtonElement = document.createElement("button")
    firstButtonElement.textContent = "Not Done"
    const secondButtonElement = document.createElement("button")
    secondButtonElement.textContent = "remove"
  
    const newDiv = document.createElement("div")
    newDiv.setAttribute("class", "todoItem")
    newDiv.setAttribute("id", newId)

    const parentDiv = document.getElementById("listTodo")
    newDiv.appendChild(newPElement)
    newDiv.appendChild(firstButtonElement)
    newDiv.appendChild(secondButtonElement)
    parentDiv.appendChild(newDiv)
  }

    function showNumberOfDone(numberOfDone) {
      const newDoneP = document.getElementById("done")
      newDoneP.textContent = `Number of Done:${numberOfDone}`
    }

    function showNumberOfNotDone(numberOfNotDone) {
      const newNotDoneP = document.getElementById("notDone")
      newNotDoneP.textContent = `Number of Not Done:${numberOfNotDone}`
    }

  function removeTodoItem(removeId){
    const removeTodo = document.getElementById(removeId)
    removeTodo.parentElement.removeChild(removeTodo)
  }

  return { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }
}
module.exports = todoUserInterface
// export {todoUserInterface}