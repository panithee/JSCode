class Student{
    static #countId = 1
    constructor(name){
        this.name = name
        this.id = Student.#countId++
    }

    getInfo(){
        return {name: this.name, id: this.id}
    }


}

let a = new Student("Panithee")
let b = new Student("Viro")
let c = new Student("Elice")
console.log(a.getInfo(),b.getInfo(),c.getInfo())
// console.log(b.getInfo())
// console.log(c.getInfo())