// // root node
// const rootNode = window.document
// console.log(rootNode)

// // root element (html)
// const rootElement = document.documentElement
// console.log(rootElement)

// //  html's children node
// const htmlChildNodes = rootElement.childNodes
// console.log(htmlChildNodes)
// console.log(htmlChildNodes.length)//array-like
// console.log(htmlChildNodes[0])//array-like

// // only element types of html's children nodes
// const htmlElementNodes = rootElement.children
// console.log(htmlElementNodes)
// console.log(htmlElementNodes.length)//array-like
// console.log(htmlElementNodes[htmlElementNodes.length-1])//array-like

// // 1. create a new paragraph element
// const newPElementNode = document.createElement('p')

// // 2. create a new attribute
// const newAttrNode = document.createAttribute('class')
// newAttrNode.value="courses"

// // 3. create a text value
// const newTextnode = document.createTextNode("INT201")

// // 4. add attribute node to  its owner tag
// newPElementNode.setAttributeNode(newAttrNode)

// // 5. add text node to a parent node
// newPElementNode.appendChild(newTextnode)

// // 6. add a new paragraph to a tree document
// const targetDiv = document.getElementById('myApp')
// targetDiv.appendChild(newPElementNode)

// // get node name, node value, and node type
// console.log(targetDiv.nodeType)
// console.log(targetDiv.nodeName)
// console.log(targetDiv.nodeValue)


// console.log(rootNode.nodeType)
// console.log(rootNode.nodeName)
// console.log(rootNode.nodeValue)

// console.log(document.head)
// console.log(document.body)
// console.log(document.title)

// console.log(newAttrNode.ownerElement)


const message = document.querySelector('#message')
const display = document.querySelector('p')
message.addEventListener('input', function () {
display.textContent =message.value
})