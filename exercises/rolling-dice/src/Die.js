import React from 'react'

const Die = (props) => {
    let {number} = props
    return (
        <div>
            <h1>{number}</h1>
        </div>
    )
}

export default Die