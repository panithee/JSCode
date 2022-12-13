import poke from './pokemon.json' assert { type: "json" };
import pokeImg from './pokemon-images.json' assert { type: "json" };

// console.log(poke[0].name.japanese)
// console.log(pokeImg[poke[0].name.english])
let divPokedex = document.getElementById('pokedex')

for (let i =0; i<150; i++){
    let newDiv = document.createElement('div')
    newDiv.className = 'pokeCard'
    
    let newImgElement = document.createElement('img')
    newImgElement.className = 'pokeImg'
    newImgElement.src = pokeImg[poke[i].name.english]
    // let srcImg = document.createAttribute('src')
    // srcImg.value = pokeImg[poke[0].name.english]
    // newImgElement.setAttribute('src', pokeImg[poke[0].name.english])
    
    let pElement = document.createElement('p')
    pElement.innerText = poke[i].name.japanese
    
    // add to pokeCard element
    newDiv.append(newImgElement)
    newDiv.append(pElement)

    // add to pokeDex
    divPokedex.append(newDiv)
}

