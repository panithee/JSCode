// const divId = document.getElementById("hello")
// divId.textContent = "Greetings"
// console.log(divId)

const liElement = document.createElement("li")
liElement.setAttribute('class', 'greetings')
liElement.textContent = "Greetings, Three"
console.log(liElement)

// select ul node
const bodyChildrenNode = document.body.children
const divChildNode = bodyChildrenNode[1]
const ulNode = divChildNode.firstElementChild // divChildNode[0]

ulNode.appendChild(liElement)