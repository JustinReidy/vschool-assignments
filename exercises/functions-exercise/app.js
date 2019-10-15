function returnSum(num1, num2){
    return num1 + num2;
}

function returnLargest(num1, num2, num3){

    return Math.max(num1, num2, num3)

}

function oddEven(num){
    if (num % 2 === 0){
        return "even"
    } else {
        return "odd"
    }
}

function stringLength(str){
    if(str.length <= 20){
        return str + str;
    } else {
       let arr = str.split("")
       return arr.slice(0, arr.length / 2).join("")
    }
}

// console.log(stringLength("This was a triumph. I'm making a note here, huge success"))

function fib(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
    function add(sum, num){
        return sum + num;
    }
    console.log(arr)
    return arr.reduce(add, 0);

   
  }

console.log(fib(5))