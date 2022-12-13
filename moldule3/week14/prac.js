// create Element
const newPElementNode = document.createElement("p")

// 2. create a new attribute
// const newAttrNode = document.createAttribute("class")
// newAttrNode.value = "courses"
newPElementNode.setAttribute("class", "courses") // reduce steps 2+4

// 3. create a text value
// const newTextnode = document.createTextNode("INT201")
// newPElementNode.setAttributeNode(newAttrNode)
// newPElementNode.textContent = "<span style='color:red'>INT201</span>"// reduce steps 3+5
newPElementNode.innerHTML = "<span style='color:red'>INT201</span>"// reduce steps 3+5

// 4. add attribute node to its owner tag

// ตอนนี้มี <p class="courses">"INT201"</p>

// 5. add text node to a parent node
// newPElementNode.appendChild(newTextnode)


// 6. add a new paragraph to a tree document
// ใส่ <p> ไปใน <div id="myApp"></>
const targetDiv = document.getElementById("myApp")
targetDiv.appendChild(newPElementNode)

// get node name, node value, and node type
console.log(targetDiv.nodeType)
console.log(targetDiv.nodeName)
console.log(targetDiv.nodeValue)

console.log(targetDiv.previousElementSibling)
console.log(targetDiv.nextElementSibling)
console.log(targetDiv.parentElement)
console.log(targetDiv.children)
