function whatDay(startingDay, numOfDays) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    
    if(numOfDays > 6){
        numOfDays = numOfDays - 7
    }
    
    if(startingDay === 'Sun'){
        console.log(days[0 + numOfDays])
    } else if (startingDay === 'Mon'){
        console.log(days[1 + numOfDays])
    } else if (startingDay === 'Tues'){
        console.log(days[2 + numOfDays])
    }else if (startingDay === 'Wed'){
        console.log(days[3 + numOfDays])
    }else if (startingDay === 'Thurs'){
        console.log(days[4 + numOfDays])
    }else if (startingDay === 'Fri'){
        console.log(days[5 + numOfDays])
    }else if (startingDay === 'Sat'){
        console.log(days[6 + numOfDays])
    }
    
}

whatDay('Sun', 5)
