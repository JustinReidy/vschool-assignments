const readLine = require("readline-sync");

let isAlive = true;

let hasWon = false;

let gotAway = false;

function Enemy(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}

const annie = new Enemy("Dragon", 100, 15);
const smoothCriminal = new Enemy("Not a Tree", 200, 30);
const conrad = new Enemy("Solaire", 500, 50);

const enemies = [annie, smoothCriminal, conrad]


function Player(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}

const player = new Player("Michael Jackson", 600, 75);

function Item(name, type){
    this.name = name;
    this.type = type;
}
const hpPotion = new Item("Half of a shield", "healingPot");
const strPot = new Item("Rusty Sword", "attackPot");
const apple = new Item("The other half of the shield", "healingPot");

const items = [hpPotion, strPot, apple]

const invintory = []


console.log("Ah, you're awake!");
const name = readLine.question("What is your name?   ");

console.log(`Welcome to the game ${name}, your journey is about to begin`);

while(isAlive && !hasWon){
    gotAway = false;
    let choice = readLine.keyIn("Would you like to [w] Walk, [i] Check Invintory, [p] Print or [q] Leave the game? ", {limit: 'wipq'});

    if(choice === 'w'){
        walk();
    } else if(choice === 'i'){
        checkInvintory();
    }else if(choice === 'p'){
        print();
    } else if(choice = 'q'){
        isAlive = false;
        console.log("You Quit The Game");
    } else if (player.hp <= 0){
        playerDeath();
    }

}

function walk(){
    let random = Math.floor(Math.random()*4)
    
    if(random === 3){
        enemyEncounter();
    } else {
        console.log("You continue walking safely")
    }
}

function enemyEncounter(){
    const currentEnemy = selectEnemy();
    while(!gotAway && isAlive){
        let choice = readLine.keyIn(`Youve been attacked by ${currentEnemy.name}, what would you like to do: [a] Attack [r] Run [q] Quit`, {limit:"arq"});
        
        if (choice === "a"){
            fight(currentEnemy);
        } else if (choice === 'r'){
            run();
        } else {
            isAlive = false;
            console.log("You have quit")
        }
    }
}

function selectEnemy(){
    let random = Math.floor(Math.random() * enemies.length)
    return enemies[random];
}


function fight(obj){
    
    let hp = obj.hp
    
    
    while(hp > 0 && isAlive){
        
        
        let playerRand = Math.floor(Math.random() * player.ap)
        let enemyRand = Math.floor(Math.random() * obj.ap)
        
        hp = hp - playerRand
        console.log(`You hit ${obj.name} for ${playerRand}, they are now down to ${hp} hp`)
        if (hp > 0){
            player.hp = player.hp - enemyRand
            if(player.hp <=  0){
            playerDeath();
        }
            console.log(`You've been hit by ${obj.name} for ${enemyRand}, you are now down to ${player.hp} hp`)
        } else if (hp <= 0){
            player.hp = player.hp + 50
            itemDrop();
            console.log(`You have killed ${obj.name} and gained 50hp so your health is ${player.hp}`)
            gotAway = true;
        }                              
        
    
    }
    
}

function run(){
    let random = Math.floor(Math.random() * 2);
    if(random === 1){
        console.log("You got away!");
        gotAway = true;
    } else {
        console.log("You didn't get away");
    }
}

function itemDrop(){
    let random = Math.floor(Math.random() * items.length);
    invintory.push(items[random].name)
    console.log(`You found a ${items[random].name}`)
    return items[random]
}

function checkInvintory(){
    console.log(invintory)
}

function playerDeath(){
    isAlive = false;
    console.log(`          _______             ______  _________ _______  ______  
    |\     /|(  ___  )|\     /|  (  __  \ \__   __/(  ____ \(  __  \
    ( \   / )| (   ) || )   ( |  | (  \  )   ) (   | (    \/| (  \  )
     \ (_) / | |   | || |   | |  | |   ) |   | |   | (__    | |   ) |
      \   /  | |   | || |   | |  | |   | |   | |   |  __)   | |   | |
       ) (   | |   | || |   | |  | |   ) |   | |   | (      | |   ) |
       | |   | (___) || (___) |  | (__/  )___) (___| (____/\| (__/  )
       \_/   (_______)(_______)  (______/ \_______/(_______/(______/ 
                                                                     `)
}

function print(){
    console.log(`Name: ${name} \n Health: ${player.hp} \n Invintory: ${invintory}`)
}