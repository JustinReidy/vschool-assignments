if(5 > 3){
    console.log("is greater than");
}

let cat = "cat";
let dog = "dog";
if(cat.length === 3){
    console.log('is the length')
}

if(cat === dog){
    
} else {
    console.log('not the same');
}

/*Bronze*/

var person = {
    name: "Bobby",
    age: 12
}

if(person.age >= 18){
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is too young to go to the movie");
}

if(person.name.charAt(0) === 'B'){
    console.log(person.name + " can go to the movie");
} else {
    console.log(person.name + " can't go to the movie");
}

if(person.name.charAt(0) && person.age >= 18){
    console.log(person.name + " can go to the movie");
} else {
    console.log(person.name + " can not go to the movie")
}
/*Silver*/
if (1 === '1'){
    console.log('strict');
} else if(1 == '1'){
    console.log('loose')
} else {
    console.log("not equal at all");
}

if (1 <= 2 && 2 === 4){
    console.log("yes");
}
/*Gold*/

if (typeof dog === 'string'){
    console.log("string");
}

if (typeof true === 'boolean'){
    console.log("boolean");
}

if (typeof no === 'undefined'){
    console.log('undefined')
}

if("s" > 12){
    console.log("yes");
}

if("a" > 52){
    console.log("yes")
}

var myNum = 10;
console.log(myNum % 2  == 0 ? "Is even" : "Is odd");