function capitalizeAndLowercase(str){
   str = str.toUpperCase();
   let str2 = str.toLowerCase();
   console.log(str);
   console.log(str2);
}

capitalizeAndLowercase('hello');

function findMiddleIndex(str){

    return Math.floor(str.length / 2)

}

console.log(findMiddleIndex("hello world"))

function returnFirstHalf(str){
    return str.slice(0, str.length / 2);
}
console.log(returnFirstHalf("Hello"))

function doAll(str){
    // let midIndex = str.prototype.findIndex(str.length / 2)
    // return midIndex
    let wordUpper = str.slice(0, Math.floor(str.length / 2))
    let wordLower = str.slice(Math.floor(str.length / 2))

    return wordUpper.toUpperCase() + wordLower.toLowerCase();
}

console.log(doAll('To be or not to be, that is the question'))

function capitalizeFirstLetter(str){
  let string = str.toLowerCase().split(' ')
  
  for(let i = 0; i < string.length; i++){
      string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
  }

  return string.join(' ');

}

console.log(capitalizeFirstLetter("this was a triumph, I'm making a note here, huge success"))