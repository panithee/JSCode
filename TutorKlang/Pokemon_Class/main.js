import Pokemon from "./poke_class.js";
//เริ่มเขียนตรงนี้

let pikachu = new Pokemon("Pikachu",120,10);
let charmander = new Pokemon("Charmander",100,10)

function battle(poke_one,poke_two){
    let round = 1
    while (round <= 10){
        console.log(`======${round}======`)
        let ran_num = Math.floor(Math.random() * (10 - 1 + 1)+1)

        if(ran_num % 2 === 0){
            console.log(`${poke_one.name} attack ${poke_two.name}`)
            poke_two.setHp(poke_two.getHp() - poke_one.getAtk())
            // check poke_two hp
            if(poke_two.getHp() <= 0){
                console.log(`${poke_one.name} Win`)
                return `${poke_one.name} Win`
            }    
            poke_two.getInfo()
        }else{
            console.log(`${poke_two.name} attack ${poke_one.name}`)
            poke_one.setHp(poke_one.getHp() - poke_two.getAtk())
            // check poke_two hp
            if(poke_one.getHp() <= 0){
                console.log(`${poke_two.name} Win`)
                return `${poke_two.name} Win`
            }
            poke_one.getInfo()

        } 
        round ++
      
    }
    console.log("======END======")
    poke_one.getInfo()
    poke_two.getInfo()
    if(poke_one.getHp() === poke_two.getHp()) console.log("Draw")
    if(poke_one.getHp() > poke_two.getHp()) console.log(`${poke_one.name} Win`)
    if(poke_two.getHp() > poke_two.getHp()) console.log(`${poke_one.name} Win`)
}



battle(pikachu, charmander)

// pikachu.getInfo()
// charmander.getInfo()
// console.log(pikachu.getAtk())
// console.log(pikachu.getHp())
// console.log(pikachu.setHp(200))