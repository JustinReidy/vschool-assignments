// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

let submit = document.submitMe;

submit.addEventListener('click', function(e){
    e.preventDefault();

    console.log(submit)
})