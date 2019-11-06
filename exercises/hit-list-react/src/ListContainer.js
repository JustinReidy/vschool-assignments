import React, { Component } from 'react';
import axios from 'axios'
import List from './List'

class ListContainer extends Component {
    constructor() {
        super()

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then(res => {        
            return this.setState({list: res.data})
        })
    }
    
    
    render() {
        // console.log(this.state.list)
        let mappedList = this.state.list.map((person, i) => <List key={person.image + i}
                                                                name={person.name}
                                                                image={person.image} />)

        return (
            <div>
                {mappedList}
            </div>
        );
    }
}

export default ListContainer;