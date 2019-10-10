let form = document.travelForm;


form.addEventListener('submit', function(e){
    event.preventDefault();

    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let age = form.age.value;
    age = +age
    let gender = form.gender.value;
    let location = form.location;
    const locationArr = [];
    for(let i = 0; i < location.length; i++){
        if(location[i].checked){
            locationArr.push(location[i].value)
        }
    }

    let diet = form.diet
    const dietArr = []
    for(let i = 0; i < diet.length; i++){
        if(diet[i].checked){
            dietArr.push(diet[i].value)
        }
    }

    alert(`
        First Name: ${firstName}
        Last Name: ${lastName}
        Age: ${age}
        Gender: ${gender}
        Destinations: ${locationArr}
        Dietary Restrictions: ${dietArr}
    `)
    
})