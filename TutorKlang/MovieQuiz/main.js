const movies = require('./movise.json').movies
let playList = []

// rest parameters
let addMovie = (movies,...id) => {
    for (let i = 0; i < id.length; i++) { //20
        for (let j = 0; j < movies.length; j++) {
           if(movies[j].id === id[i]){ //id[0] = 20 === movies[0].id === 1
                playList.push(movies[j])
                break
           }
        }
    }
}

let deleteMovie = (id) =>{
    let indexOfitem = null
    let newPlayList = []
    for (let i = 0; i < playList.length; i++) {
        if(playList[i].id === id){
            indexOfitem = i
        }
    }
    for (let j = 0; j < playList.length; j++) {
        if(j != indexOfitem){
           newPlayList.push(playList[j])
        }
    }
    playList = newPlayList
}

 let swapMovie = (index_one,index_two) => {
        let temp
        temp = playList[index_one]
        playList[index_one] = playList[index_two]
        playList[index_two] = temp    
        
    
 }


addMovie(movies,20,72,30)
deleteMovie(20)
swapMovie(0,1)
console.log(playList)

