import React from 'react'
import Spot from './spot'
import spotInfo from './spots.json'

const masterSpots = () => {

    const mappedSpots = spotInfo.map((spot, i) => <Spot key={i + spot.name} name={spot.place} price={spot.price} time={spot.timeToGo} />)
    
    return (
        <div className="spot-container">
            {mappedSpots}
        </div>
    )
}

export default masterSpots