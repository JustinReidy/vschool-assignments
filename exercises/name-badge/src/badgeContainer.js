import React from 'react';
import Badge from './Badge'

function badgeContainer(props) {
    const mappedBadges = props.badges.map((badge, i) => <Badge key={i + badge.email}
                                                                fName = {badge.fName}
                                                                lName = {badge.lName}
                                                                email = {badge.email}
                                                                birthPlace = {badge.birthPlace}
                                                                phone = {badge.phone}
                                                                favFood = {badge.favFood}
                                                                about = {badge.about}
                                                                />)
    
    return (
        <div>
            {mappedBadges}
        </div>
    );
}

export default badgeContainer;