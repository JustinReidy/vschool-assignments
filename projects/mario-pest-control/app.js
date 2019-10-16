const work = document.baddies;
const gold = document.getElementById("gold")

work.addEventListener('submit', function(){
    event.preventDefault();

    let goomba = work.goomba.value;
    let bobomb = work.bobomb.value;
    let cheepcheep = work.cheepcheep.value;

    let totalGold = (goomba * 5) + (bobomb * 7) + (cheepcheep * 11);

    gold.textContent = `${totalGold} coins`
})