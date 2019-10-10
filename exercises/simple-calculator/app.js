const additionForm = document.addition;
const subtractionForm = document.subtraction;
const multiplicationForm = document.multiplication;

additionForm.addEventListener('submit', function(){
    event.preventDefault();

    let value1 = parseInt(additionForm.addition1.value, 10)
    let value2 = parseInt(additionForm.addition2.value, 10)
    
    let sum =  value1 + value2
    document.getElementById('additionSum').textContent = `${sum}`
})

subtractionForm.addEventListener('submit', function(){
    event.preventDefault();

    let value1 = parseInt(subtractionForm.subtraction1.value, 10)
    let value2 = parseInt(subtractionForm.subtraction2.value, 10)
    
    let sum =  value1 - value2
    document.getElementById('subtractionSum').textContent = `${sum}`
})

multiplicationForm.addEventListener('submit', function(){
    event.preventDefault();

    let value1 = parseInt(multiplicationForm.multiplication1.value, 10)
    let value2 = parseInt(multiplicationForm.multiplication2.value, 10)
    
    let sum =  value1 * value2
    document.getElementById('multiplicationSum').textContent = `${sum}`
})