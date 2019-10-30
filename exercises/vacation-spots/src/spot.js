import React from 'react'

const Spot = (props) => {
    let {name, price, time} = props
    let style;
    if(time === "Spring"){
         style = {
            backgroundColor: "#02e31c"
        }
    } else if(time === "Summer"){
        style = {
           backgroundColor: "#e8e002"
       }
    } else if (time === "Fall"){
        style = {
            backgroundColor: "#e83e00"
        }
    } else {
        style = {
            backgroundColor: "#c2fcf9"
        }
    }
    let dollars;
    if(price < 500){
        dollars = "$"
    } else if (price > 500 && price < 1000){
        dollars = "$$"
    } else if (price > 1000){
        dollars = "$$$"
    }

    return(
        <div style={style} className="spot">
            <h1>{name}</h1>
            <h3>{price}</h3>
            <h4>{time}</h4>
            <h5>{dollars}</h5>
        </div>
    )
}

export default Spot