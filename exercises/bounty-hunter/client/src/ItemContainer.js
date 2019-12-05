import React, { Component } from 'react';
import axios from 'axios'

import Item from './Item'
import {withData} from './BountyProvider'

class ItemContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            bounties: []
        }
    }

    componentDidMount () {
        this.props.handleGET()
    }

    render() {
        const mappedBounties = this.props.bounties.map(bounty => <Item key={bounty._id}
                                                                       firstName={bounty.firstName}
                                                                       lastName={bounty.lastName}
                                                                       living={bounty.living}
                                                                       type={bounty.type}/>)
        return (
            <div>
                {mappedBounties}
            </div>
        );
    }
}

export default withData(ItemContainer);