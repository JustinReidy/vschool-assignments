var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrChallenge(arr1, arr2){
    arr2.pop();
    arr1.shift();
    
    arr1.push(arr1.indexOf('orange'));
    
    arr2.push(arr2.length)
    
    const food = arr1.concat(arr2);
    
    food.splice(4, 2)
    
    return food.reverse().join()
    
}

console.log(arrChallenge(fruit, vegetables))