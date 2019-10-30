import React from 'react'

const Square = (props) => {

    const border = {
        backgroundColor: props.color,
        border: "1px solid black"
    }

    return(
        <div style={border}></div>
    )

}

export default Square