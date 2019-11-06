import React from 'react';

function List(props) {
    return (
        <div>
            <img src={props.image} alt=""/>
            <h1>{props.name}</h1>
        </div>
    );
}

export default List;