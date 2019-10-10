const boxColor = document.getElementById("box");

boxColor.addEventListener('mouseover', function(){
    boxColor.style.backgroundColor = 'blue'
})

boxColor.addEventListener('mousedown', function(e) {
    boxColor.style.backgroundColor = 'red'
})

boxColor.addEventListener('mouseup', function(){
    boxColor.style.backgroundColor = 'yellow'
})

boxColor.addEventListener('dblclick', function(){
    boxColor.style.backgroundColor = 'green'
})

window.addEventListener('scroll', function(){
    boxColor.style.backgroundColor = 'orange'
})

document.addEventListener('keydown', function(e){
    if(e.key === 'r' || e.key === 'R'){
        boxColor.style.backgroundColor = 'red'
    } else if(e.key === 'b' || e.key === 'B'){
        boxColor.style.backgroundColor = 'blue'
    } else if(e.key === 'y' || e.key === 'Y') {
        boxColor.style.backgroundColor = 'yellow'
    } else if(e.key === 'g' || e.key === 'G'){
        boxColor.style.backgroundColor = 'green'
    } else if(e.key === 'o' || e.key || 'O'){
        boxColor.style.backgroundColor = 'orange'
    }
})