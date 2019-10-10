const readLineSync = require('readline-sync')

let num1 = readLineSync.question('Enter the First Number: ');
let num2 = readLineSync.question('Enter the Second Number: ');

let operators = [
    'add',
    'sub',
    'mul',
    'div'
]

index = readLineSync.keyInSelect(operators, 'What do you want to do?');

if(operators[index] === 'add'){
    function add(num1, num2){
       return `The result is: ${+num1 + +num2}` 
    }
    console.log(add(num1, num2))
} else if(operators[index] === 'sub'){
    function subtract(num1, num2){
        return `The result is: ${+num1 - +num2}` 
     }
     console.log(subtract(num1, num2))

} else if(operators[index] === 'mul'){
    function multiply(num1, num2){
        return `The result is: ${+num1 * +num2}` 
     }
     console.log(multiply(num1, num2))

} else if(operators[index] === 'div'){
    function divide(num1, num2){
        return `The result is: ${+num1 / +num2}` 
     }
     console.log(divide(num1, num2))

}