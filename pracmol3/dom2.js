//1. create <li> node
const liElementNode=document.createElement('li')//<li></li>
liElementNode.setAttribute('class', 'dev')//<li class="dev"></li>
liElementNode.textContent='INT101- Java Programming I'//<li class="dev">INT101- Java Programming I</li>
//2. selecting <ul> node
const bodyChildrenNode=document.body.children //array-like object
console.log(bodyChildrenNode)
const bodyChildNode=document.body.childNodes
console.log(bodyChildNode)
const divChildNode=bodyChildrenNode[1]
const ulNode=divChildNode.firstElementChild//divChildNode[0]
console.log(ulNode)
//3.append <li> to <ul> parent nodeulNode.appendChild(liElementNode)
//<li class="dev">INT202-Server Side I</li> 
const liElementNode2=document.createElement('li')
liElementNode2.setAttribute('class', 'dev')
liElementNode2.textContent='INT202-Server Side I'
ulNode.appendChild(liElementNode2)