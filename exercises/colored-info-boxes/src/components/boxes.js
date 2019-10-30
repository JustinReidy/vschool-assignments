import React from 'react';



const Boxes = (props) => {

    const container = {
        border: "1px solid black"
    }

    return (
        <div className="container" style={{backgroundColor: props.background}}>

        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <p>{props.information}</p>

        </div>
    )
}

export default Boxes;