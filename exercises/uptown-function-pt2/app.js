var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];


function returnString(arr){
    return arr.join(' ')
}

function returnBackwards(arr){
    let arr2 = []

    for(let i = 0; i < arr.length; i++){
        arr2.push(arr[i])
    }

    return arr2.reverse().join(' ')
}

function everyOther(arr){
    let arr2 = []
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            arr2.push(arr[i])
        }
    }

    return arr2.join(' ')
}

function switchedLyrics(arr){
    let arr2 = []
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            arr2.push(arr[i + 1])
        } else {
            arr2.push(arr[i - 1])
        }
    }
    return arr2.join(' ')
}

// function randomLyrics(arr){
//     let arr2 = arr[Math.floor(Math.random() * arr.length)];

//     return arr2.join(' ')
// }



// console.log(returnString(lyrics))
// console.log(returnBackwards(lyrics))
// console.log(everyOther(lyrics))
console.log(switchedLyrics(lyrics))

// console.log(randomLyrics(lyrics))