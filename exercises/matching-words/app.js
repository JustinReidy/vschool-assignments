function noDupes(str) {
    const newArr = []
    const oldArr = str.toLowerCase().split(" ");
    // console.log(oldArr)
    for(let i = 0; i < oldArr.length; i++){
        let total = 0;
        for(let j = 0; j <oldArr.length; j++){
            if (oldArr[j] === oldArr[i]){
                total++
                if(total > 1 && !newArr.includes(oldArr[i])){
                    newArr.push(oldArr[i])
                }
            }
        }
    }
    return newArr
}

console.log(noDupes("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."))