class Person{
    constructor(firstName='N/A', lastName='N/A', dateofBirth = new Date(Date.now())){
        this.firstName = firstName
        this.lastName = lastName
        this.dateofBirth = dateofBirth
    }

    getFullname(){
        return `${this.lastName}, ${this.firstName}`
    }

    getAge(){
        const diff_ms = Date.now() - this.dateofBirth.getTime()
        console.log(diff_ms)
        const diff_date = new Date(diff_ms)
        console.log(diff_date)
        return diff_date.getUTCFullYear()-1970
    }

}

// ทำให้ class person สามารถมาเรียกตัว isEqualeได้ เพราะ isEqual เป็นprototype
Person.prototype.isEqual= function (anotherPerson) {
    return this.firstName.toLowerCase() === anotherPerson.firstName.toLowerCase()
    && this.lastName.toLowerCase() === anotherPerson.lastName.toLowerCase()
}

Person.prototype.toString = function () {
    return `fullName: ${this.getFullname()}, age: ${this.getAge()}`
}


const p1 = new Person()
const p2 = new Person("Panithee", "Viro", new Date(2002,9,22))

// console.log(typeof Person)
console.log(Date.now())
console.log(new Date(2002,9,22).getTime())

// console.log(p1)
// console.log(p1.getFullname())
// console.log(`age ${p1.getAge()}`)

// console.log(p2)
// console.log(p2.getFullname())
console.log(`age ${p2.getAge()}`)

// console.log(Person.prototype)
// console.log(p1.isEqual(p2))
// console.log(p1.toString())
// console.log(p2.toString())

// create object without class
const pp1={firstName: 'Somsak', lastName: 'Jaidee'}