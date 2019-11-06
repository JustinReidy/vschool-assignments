function twoSums (arr, num){
    const sums = []

    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr.length; j++){

            if(arr[i] + arr[j] === num && sums.length === 0){
                sums.push([i, j])
            }

        }

    }

    return sums
}

console.log(twoSums([1, 2, 3], 4))