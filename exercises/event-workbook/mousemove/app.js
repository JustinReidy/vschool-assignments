let mouse = document.getElementById('red-box');
let h3 = document.getElementById('output')

mouse.addEventListener('mousemove', function(e){
    h3.textContent = `X: ${e.clientX}
    Y: ${e.clientY}`
})