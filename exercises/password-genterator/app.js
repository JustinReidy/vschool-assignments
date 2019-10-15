let password = "";
let charSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/", "[", "]", "{", "}", "+", "-", "=", "<", ">"]

function passwordGnerator(len, arr){
    const pass = [];
    for(let i = 0; i < len; i++){
        pass.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return pass.join('')
}

console.log(passwordGnerator(15, charSet))