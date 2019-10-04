for(let i = 0; i < 10; i++){
    console.log(i);
}

for(let i = 9; i > -1; i--){
    console.log(i);
}

var fruits = ["banana", "orange", "apple", "kiwi"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

let arry = [];

for(let i = 0; i < 10; i++){
    arry.push(i)
}

console.log(arry)

for(let i = 0; i < 101; i++){

    if(i % 2 === 0){
        console.log(i);
    }

}

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var fruitOdd = [];

for(let i = 0; i < fruit.length; i++){
    if(i % 2 === 0){
        fruitOdd.push(fruit[i]);
    }
}
console.log(fruitOdd);

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  let names = [];
  let occupations = [];

  for(let i = 0; i < peopleArray.length; i++){
      console.log(peopleArray[i].name);
  }

  for(let i = 0; i <peopleArray.length; i++){
      names.push(peopleArray[i].name);
      occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);

for(let i = 0; i < peopleArray.length; i++){
    if(i % 2 == 0){
        names.push(peopleArray[i].name)
        occupations.push(peopleArray[i + 1].occupation)
    }
}
console.log(names);
console.log(occupations);

let matrix = [];

for(let i = 0; i < 3; i++){
    matrix.push([]);
    for(let j = 0; j < 3; j++){
        matrix[i].push(0)
    }
}

console.log(matrix);

let matrix2 = [];

for(let i = 0; i < 3; i++){
    matrix2.push([]);
    for(let j = 0; j < 3; j++){
        matrix2[i].push(i);
    }
}
console.log(matrix2);

let matrix3 = [];

for(let i = 0; i < 3; i++){
    matrix3.push([]);
    for(let j = 0; j < 3; j++){
        matrix3[i].push(j);
    }
}

console.log(matrix3);

for(let i = 0; i < 3; i++){
    matrix3[i].splice(0);
    for(let j = 0; j < 3; j++){
        matrix3[i].push('x');
    }

}

console.log(matrix3)