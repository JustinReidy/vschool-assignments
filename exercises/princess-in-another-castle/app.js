let gameActive = true;


class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }    

    gotHit(){
        if(status === "Powered Up"){
            player.status = "Big"
        } else if(status === "Big"){
            player.status = "Small"
        } else if (status === "Small"){
            player.status = "dead"
            gameActive = false;
        }
    }

    gotPowerup(){
        if (status === "Small"){
            player.status = "Big"
        } else if(status === "Big"){
            player.status = "Powered Up"
        } else if (status === "Powered Up"){
            player.hasStar = true;
            
        }
    }

    addCoin(){
        player.totalCoins++
    }

    print(){
        console.log(`name: ${player.name}`);
        console.log(`Status: ${player.status}`)
        console.log(`Total Coins: ${player.totalCoins}`)
        if(player.hasStar === true){
            console.log("You got a star!")
        }
    }

}

const player = new Player("Mario", 0, "Big", false)

if(player.status === "dead"){
    gameActive = false;
}


setInterval(function randomRange(){

        let random = Math.floor(Math.random() * 3)
        if(random === 0){
            player.gotHit();
            player.print()
        } else if(random === 1){
            player.gotPowerup();
            player.print();
        } else if (random === 2){
            player.addCoin();
            player.print();
        }
}, 1000)

