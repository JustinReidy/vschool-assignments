var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

// function returnString(arr){
//     let str = arr.join(" ")
//     return str;
// }


// function reverseString(arr){
//     let arr2 = []
    
//     for(let i = 0; i < arr.length; i++){
//         arr2.push(arr[i])
//     }

//     arr2.reverse()
//     let str = arr2.join(" ")
//     return str;
// }

// function everyOtherWord(arr){
//     let arr2 = [];
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 === 0){
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2.join(" ")
// }

function switchedLyrics(arr){
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            arr2.push(arr[i + 1])
        } else {
            arr2.push(arr[i - 1])
        }
    } 
    return arr2.join(' ')
}

function randomReturn(arr){
    let arr2 = [];
    arr2.push()
}

// console.log(returnString(lyrics))
// console.log(reverseString(lyrics))
// console.log(everyOtherWord(lyrics))
console.log(switchedLyrics(lyrics))

