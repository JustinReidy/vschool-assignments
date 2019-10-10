const readLineSync = require('readline-sync')

let name = readLineSync.question("What is your name: ")

const options = [
    'Put Hand In Hole',
    'Find The Key',
    'Open The Door'
]


let choice = readLineSync.keyInSelect(options, `What do you want to do ${name}`);;
let keyFound = false;
let dead = false;
 
while(dead === false && keyFound === false){
    if(options[choice] === "Put Hand In Hole"){
        console.log("You Died...")
        dead = true;
        return null;
    } else if(options[choice] === "Find The Key"){
        keyFound = true;
        console.log(`You found a key ${name}, but what does it open?`)
        choice = readLineSync.keyInSelect(options, `What do you want to do: `);
    } else if(options[choice] === "Open The Door" && keyFound === false){
        console.log(`The door is locked ${name}. You need the key`)
        choice = readLineSync.keyInSelect(options, `What do you want to do: `);
    } else if(options[choice] === "Open The Door" && keyFound === true){
        console.log(`You escaped ${name}, aren't you proud of yourself. We should have cake.`)
    }
}

while(dead === false && keyFound === true){
    if(options[choice] === "Put Hand In Hole"){
        console.log("You Died...")
        dead = true;
        return null;
    } else if(options[choice] === "Find The Key"){
        keyFound = true;
        console.log(`You already found the key ${name}, go figure out what it opens`)
        choice = readLineSync.keyInSelect(options, `What do you want to do: `);
    } else if(options[choice] === "Open The Door" && keyFound === false){
        console.log(`The door is locked ${name}. You need the key`)
        choice = readLineSync.keyInSelect(options, `What do you want to do: `);
    } else if(options[choice] === "Open The Door" && keyFound === true){
        console.log(`You escaped ${name}, aren't you proud of yourself. We should have cake.`)
        return null
    }
}
