// //  1. create<li>node
// const liElementNode=document.createElement('li') // <li></li>
// liElementNode.setAttribute('class', 'dev') // <li class="dev"></li>
// liElementNode.textContent = 'INT101- Java Programming I' // // <li class="dev">INT101- Java Programming I</li>

// // 2. selecting <ul> node
// const bodyChildrenNode = document.body.children // array-like object
// const divChildNode = bodyChildrenNode[1]
// const ulNode = divChildNode.firstElementChild // divChildNode[0]

// console.log(ulNode)

// // 3.append <li> to <ul parent node
// ulNode.appendChild(liElementNode)


// const liElementNode = document.createElement("li")
// const liElementNode2 = document.createElement("li")
// liElementNode.setAttribute('class', 'dev')
// liElementNode2.setAttribute('class', 'dev')
// liElementNode.textContent = 'INT101- Java Programming I'
// liElementNode2.textContent = 'INT202-Server Side I'
// const targetDiv = document.getElementById('courseList').firstElementChild
// targetDiv.appendChild(liElementNode)
// targetDiv.appendChild(liElementNode2)

// // 1. query by attribute id
// const divById=document.getElementById('summary')
// console.log(divById)

// const ulById=document.getElementById('courseList')
// console.log(ulById)

// // 2. query by tag name
// const ulByTagName = document.getElementsByTagName('ul')
// console.log(ulByTagName)
// console.log(ulByTagName.length)
// console.log(ulByTagName[0])

// // 3. query by classname
// const nodeByClassname=document.getElementsByClassName('database')
// console.log(nodeByClassname)

// Array.from(nodeByClassname).forEach(element => {
//     console.log(element)
// });

// // 4.query by name attribute
// const nodeByName=document.getElementsByName('abc')
// console.log(nodeByName)

// // 5.query by querySelector (return all result nodes)
// const queryByClass = document.querySelector(".database")
// console.log(queryByClass)
// const queryById = document.querySelector("#summary")
// console.log(queryById)

// // 6. query by querySelectorAll (return all result nodes)
// const queryAllByClass = document.querySelectorAll(".database")
// console.log(queryAllByClass)

// const queryAllByTagClass = document.querySelectorAll('li[class=devops]')
// console.log(queryAllByTagClass)

// const queryAllByTagClass2 = document.querySelectorAll('li.devops')
// console.log(queryAllByTagClass2)

// // 1. create <p> node
// const pNewNode=document.createElement('p')
// pNewNode.setAttribute('class', 'devops')
// pNewNode.textContent='2'

// // 2. select parent node
// const divParentNode = document.getElementById('summary')

// // 3. select reference node <p class="dev">2</p>
// const divChildrenNode = divParentNode.children
// const referNode=divChildrenNode[1]
// console.log(referNode)

// // 4. insert before 3.
// divParentNode.insertBefore(pNewNode, referNode)

// //1.create a new <li> node
// const liNewNode=document.createElement('li')
// liNewNode.textContent='Ajarn Saichon Jaiyen'
// //2. selecting a parent node <ul class="lecturers">
// const ulParent=document.querySelector(".lecturers")
// //3. selecting an old node  <li>Ajarn Pichet Limvajiranan</li>
// const liOldNode=ulParent.children[1]
// //4. replace node
// ulParent.replaceChild(liNewNode, liOldNode)

// // remove node
// // 1. selecting a delete mode
// const deleteNode = ulParent.lastElementChild
// ulParent.removeChild(deleteNode)

// 1. who are you?, user enteres her/his name
// 2. confirm your name (confirm)
// 3. greeting message (alert)

// const yourName = prompt('Who are you?', 'please type your name')
// if(yourName===null){
//     alert('Hello, guest')
// }else{
//     const isConfirmName = confirm(`Are you ${yourName}?`)
//     isConfirmName?alert(`hello, ${yourName}`):alert('you are guest!')
// }



