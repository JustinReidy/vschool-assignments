function balancedParentheses(str){
    let split = str.split('')
    let open = '('
    let close = ')'
    let torf
    let count = 0

    if(split.length % 2 != 0){
        console.log('False')
        torf = false
    } else{
        
        for(let i = 0; i < split.length; i++){
            if(split[i] === open){
                count++
            } else if (split[i] === close){
                count --
            }
        }

        if(count === 0){
            torf = true
        } else if(count > 0 || count < 0){
            torf = false
        }

    }

    return torf

}

console.log(balancedParentheses('(()))))))))'))