import React, { Component } from 'react';
import axios from 'axios'

const {Provider, Consumer} = React.createContext()

class BountyProvider extends Component {
    constructor(){
        super()

        this.state = {
        
            bounties: []
        }
    }

    handleGET = () => {
        axios.get('/bounty').then(res => {
            return this.setState({bounties: res.data})
        })
    }

    
    

    handleSubmit = (e, bounty) => {
        e.preventDefault()
        axios.post('/bouty', bounty).then(res => {
            this.setState(prevState => {
                return {bounties: [res.data, ...prevState.bounties]}
            })
        })
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                handleGET: this.handleGET,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default BountyProvider;

export function withData(Component){
    return props => <Consumer>
        {value => <Component {...value} {...props} />}
        </Consumer>
}
