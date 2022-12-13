import poke from './pokemon.json' assert { type: "json" };
import pokeImg from './pokemon-images.json' assert { type: "json" };

let imgCount = 0
let divContainer = document.getElementsByClassName('container')
let divPokeCard = document.getElementById('poke_card')
let divPokeInfo = document.getElementById('poke_info')
let imgTag = document.createElement('img')
let pTag = document.createElement('p')
let divBtn = document.createElement('div')
let prevButton = document.createElement('button')
let nextButton = document.createElement('button')

imgTag.src = pokeImg[poke[imgCount].name.english]
pTag.textContent = poke[imgCount].name.japanese
divBtn.className = 'btn'
prevButton.className = 'prev_btn'
nextButton.className = 'next_btn'
prevButton.textContent = 'Prev'
nextButton.textContent = 'Next'

divPokeCard.append(imgTag)
// divPokeCard.insertBefore(imgTag, divPokeCard)
divPokeInfo.append(pTag)
divContainer[0].append(divBtn)
divBtn.append(prevButton)
divBtn.append(nextButton)

nextButton.addEventListener('click', () => {
    imgCount++    
    if(imgCount > 20){
        imgCount = 0    
    }
    pTag.textContent = poke[imgCount].name.japanese    
    imgTag.src = pokeImg[poke[imgCount].name.english]
})
prevButton.addEventListener('click', () => {
    imgCount--    
    if(imgCount < 0){
        imgCount = 20  
    }
    pTag.textContent = poke[imgCount].name.japanese    
    imgTag.src = pokeImg[poke[imgCount].name.english]
})