import React from 'react';
import Item from './Item'

function ItemContainer(props) {
    const mappedItems = props.name.map((item) => <Item name={item.name} /> )
    
    return (
        <div>
            {mappedItems}
        </div>
    );
}

export default ItemContainer;