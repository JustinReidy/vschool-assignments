import React from 'react'

function Item (props) {
    let {firstName, lastName, living, type} = props
    let alive = ""

    if(living === true){
        alive = "Alive"
    } else if (living === false){
        alive = "Dead"
    }

    return (
        <div>
            <h1>{firstName} {lastName}</h1>
            <h3>{type}</h3>
            <h4>{alive}</h4>
        </div>
    )
}

export default Item