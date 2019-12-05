import React, {useState} from 'react';

const Character = (props) => {

    const [isSelected, setIsSelected] = useState(false)

    const handleClick = (value) => {
        props.handleCount()
        setIsSelected(prevIsSelected => !prevIsSelected)
    }

    return (
        <div onClick={props.handleCount} style={{border: `${isSelected ? "3px black solid" : "none"}`}}>
            <h1>{props.name}</h1>
        </div>
    );
};

export default Character;