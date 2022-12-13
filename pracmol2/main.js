

// let findOrange = fruits.find(index => index === "oranges")
// console.log(findOrange.length)

// let findIndexOfMango = fruits.findIndex(index => index === "mango")
// console.log(findIndexOfMango)

// if(fruits.includes("oranges")){
//     console.log(fruits)
// }

// let filterFruits = fruits.filter(fruitsName => fruitsName !== "papaya") 


// console.log(filterFruits)
// console.log(filterFruits.length)

// fruits.reverse()
// let x =[1,2,3]
// fruits = fruits.concat(x)

// let c = fruits.slice(0, 2)
// console.log(c)

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(1, 3, "May");
// // replaces 1 element at index 4
// console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]



// console.log(fruits.reverse())
// console.log(fruits.indexOf("oranges",3))

// fruits = fruits.join(', ')

// console.log(fruits)
// fruits = fruits.split(" ")
// console.log(fruits)

// fruits.forEach(function(fruits){
//     console.log(fruits)
// }) 


// for(const f in fruits){
//     console.log(f)
// }


// let fruits = ["oranges", "apple", "watermelon", "bananas", "mango", "papaya", "papaya", "papaya"]
12




class Fruits{
    constructor(){
        this.fruits=[]
    }

   addFruits(newFruits){
        this.fruits.push(newFruits);
        return this.fruits
    }
    
    ascFruits(){
        this.fruits.sort()
        
    }
    
    descFruits(){
        this.ascFruits()
        this.fruits.reverse()
    }
    
    removeFruits(delFruits){
        this.fruits = (this.fruits.filter(allFruits => allFruits !== delFruits))
        return this.fruits
    }
    
    searchFruits(fruitsName){
        return this.fruits.filter(allFruits => allFruits === fruitsName)
    }
    
    
    getFruits(){
        return this.fruits
    }

}

let fruits1 = new Fruits()
console.log(fruits1.addFruits("oranages"))
console.log(fruits1.addFruits("papaya"))
console.log(fruits1.addFruits("mango"))



// console.log(searchFruits("oranges"))
// console.log(removeFruits("oranges"))
// console.log(getFruits())






