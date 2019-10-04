/*#1 */
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let count = 0

for(let i = 0; i < officeItems.length; i++){

    if(officeItems[i] === "computer"){
        count++;
    }

}

console.log(count+ " computers");

/*#2 */
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){

        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'){

            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. He is good to see Mad Max Fury Road.");

        } else {

            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. She is good to see Mad Max Fury Road.");

        } 

      } else {

          if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){

            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let him in");

          } else {

            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let her in");

          }
      }
  }

