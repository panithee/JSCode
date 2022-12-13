// Todo Class
// class Todo{
//     static runningId = 1
//     constructor(description) {
//         this.id = Todo.runningId++
//         this.description = description
//     }

//     getTodo(){
//         return {id:this.id,description:this.description}
//     }

//     setDescription(newDescription){
//         this.description = newDescription
//     }
// }

// // TodoListManagement
// function TodoListManagement(){
//     let todos=[]
//     // function addTodo(desc){
//     //     todos.push(new Todo(desc))
//     //     return todos.length
//     // }

//     const addTodo = desc => {
//         return todos.push(new Todo(desc))
//     }
    
//     function removeTodo(removeId){
//         // for(let remove of todos){
//         //     if(remove.id === removeId){
//         //         todos.splice(todos.indexOf(remove),1)
//         //     }
//         // }
//         todos = todos.filter(todo => todo.id!==removeId)
//         return todos
//     }
    
//     function findTodo(searchId){
//         // for(let search of todos){
//         //     if(search.id === searchId){
//         //         return {search}
//         //     }  
//         // }    
//         return todos.find(todo => todo.id === searchId)
//     }

//     function getTodos(){
//         return todos
//     }
  
//     return {addTodo,removeTodo,findTodo,getTodos}
    
// }
// // destructuring object
// let {addTodo,removeTodo,findTodo,getTodos} = TodoListManagement()
// const mnm = TodoListManagement()


// const {addTodo, removeTodo, findTodo, getTodos} = TodoListMangement()
// const mnm = TodoListMangement()




class Todo{
    static id = 1
    constructor(description){
        this.id = Todo.id++
        this.description = description

    }

    getTodo(){
        return {id: this.id, description: this.description}
    }

    setDescription(newDescription){
        return this.description = newDescription
    }

}
// helsslodasdsaddsdsddds

function TodoListManagement() {
    let todos = []
    function addTodo(desc){
        todos.push(new Todo((desc)))
        return todos.length
    }
    
    function removeTodo(removeId){
        return todos = todos.filter(Todo => Todo.id!==removeId)
    }
    
    function findTodo(searchId){
        return todos.filter(Todo => Todo.id === searchId)
    }

    function getTodos(){
        return todos
    }

    return {addTodo, removeTodo, findTodo, getTodos}
}

let {addTodo, removeTodo, findTodo, getTodos} = TodoListManagement()

console.log(addTodo("heelo"))
console.log(addTodo("LOL"))

console.log(removeTodo(1))
console.log(findTodo(2))

console.log(getTodos())




