class Person{
    constructor(firstName='N/A',lastName='N/A',dateofBirth=new Date(Date.now())){
        this.firstName=firstName
        this.lastName=lastName
        this.dateofBirth=dateofBirth
    }
    
    getFullName(){
        return this.lastName+","+this.firstName
    }
    getAge(){
        return Date.now(getFullYear)-this.dateofBirth;
      
    }
    isEqual(anotherPerson){
        
        if(this.firstName.localeCompare(anotherPerson.firstName) && (this.lastName.localeCompare(anotherPerson.lastName))){
            return true
        }else
            return false
    }

}
let testperson = new Person()
let person = new Person("Panithee","Virojwongchai","2002-10-22")
let person2 = new Person("Chaluntorn","Niyom","2002-10-1")

console.log(testperson)
console.log(testperson.dateofBirth.getFullYear())
// console.log(person2)

console.log(person.getFullName())
console.log(person.getAge())
console.log(person.isEqual(person2))