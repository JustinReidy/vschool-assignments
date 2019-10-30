import React from 'react'

const Superhero = (props) => {
    let {name, show, phrase, img} = props
    const alertPhrase = () => {
        alert(phrase)
    }


    return (
        <div onClick={alertPhrase}>
            <h1>{name}</h1>
            <h3>{show}</h3>
            <img src={img} alt="" />
        </div>
    )
}
export default Superhero