const { pokeList } = require('./pokeList.js');

const poke = require('./pokeList.js').pokeList;
//เริ่มเขียนต่อจากตรงนี้

const pokefire = (pokeList) => {
    let arr = []
    for (let element of pokeList) {
        if (element !== null && element.type === 'fire') {
            console.log(element.name)
            arr.push(element)   
        }
    }
    return arr.sort(function (a, b) {
        return parseInt(a.id) - parseInt(b.id)
    });
}

const pokeMostAtk = (arr) => {
    let fire
     let grass
     let electric
     for (let item of arr) {
       switch (item?.type) {
         case 'fire':
           if(fire === undefined){
             fire = item
           }else if(item.atk > fire.atk){
             fire = item
           }
           break
         case 'grass':
           if(grass === undefined){
             grass = item
           }else if(item.atk > grass.atk){
             grass = item
           }
           break
         case 'electric':
           if(electric === undefined){
             electric = item
           }else if(item.atk > electric.atk){
             electric = item
           }
           break
       }
     }
     return [fire,grass,electric].sort( (a,b) => parseInt(b.id) - parseInt(a.id) )
}

   console.log(pokefire(poke))
   console.log(pokeMostAtk(poke))
    
