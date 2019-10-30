
function multTable(n){
    let matrix = [];

    for(let i = 0; i < n; i++){
        matrix.push([]);
        for(let j = 0; j < n; j++){
            matrix[i].push(i * j);
        }
    }
    
    console.log(matrix);
}

multTable(100000);