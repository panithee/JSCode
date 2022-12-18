const liINT101 = document.createElement('li')
liINT101.setAttribute('class', 'dev')
liINT101.textContent = 'INT101- Java Programming I'
const liINT102 = document.createElement('li')
liINT102.setAttribute('class', 'dev')
liINT102.textContent = 'INT202-Server Side I'

const divCourseList = document.getElementById('courseList')
const ulCourseList = divCourseList.children[0]
ulCourseList.append(liINT101)
ulCourseList.append(liINT102)

// const bodyChildrenNode = document.body.children
// const divCourseList = bodyChildrenNode[1]
// console.log(divCourseList)

// 1. create <p> node
const pNewNode=document.createElement('p')
pNewNode.setAttribute('class', 'devops')
pNewNode.textContent='2'

// 2. select parent node
const divParentNode = document.getElementById('summary')

// 3. select reference node <p class="dev">2</p>
const divChildrenNode = divParentNode.children
console.log(divChildrenNode)
const referNode=divChildrenNode[1]
// console.log(referNode)

// 4. insert before 3.
divParentNode.insertBefore(pNewNode, referNode)


const liLecturer = document.createElement('li')
liLecturer.textContent = 'Ajarn Saichon Jaiyen'

const ulParent = document.querySelector('.lecturers')
console.log(ulParent)
const liChildren = ulParent.children
console.log(liChildren)
const liRefer = liChildren[1]
console.log(liRefer)
// ulParent.replaceChild(liLecturer, liRefer)
ulParent.insertBefore(liLecturer, liRefer)

// remove node
// 1. selecting a delete mode
const deleteNode = ulParent.lastElementChild
console.log(deleteNode)
ulParent.removeChild(deleteNode)

// 1. who are you?, user enteres her/his name
// 2. confirm your name (confirm)
// 3. greeting message (alert)

const yourName = prompt('Who are you?', 'please type your name')
if(yourName===null){
    alert('Hello, guest')
}else{
    const isConfirmName = confirm(`Are you ${yourName}?`)
    isConfirmName?alert(`hello, ${yourName}`):alert('you are guest!')
}


