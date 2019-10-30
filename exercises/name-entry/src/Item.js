import React from 'react';


function Item(props) {
    return (
        <div>
            <ul>
                <li>{props.name}</li>
            </ul>
        </div>
    );
}

export default Item;