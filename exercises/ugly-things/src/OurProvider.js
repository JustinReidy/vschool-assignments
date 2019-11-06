import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class OurProvider extends Component {
    constructor(){
        super()

        this.state = {
            things: []
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        
        this.setState()
    }

    render(){
        return(
            <Provider value={{...this.state, handleSubmit: this.handleSubmit}}>
                {this.props.children}
            </Provider>
        )
    }
}

export default OurProvider

export function withProvider (Comp){
    return props => <Consumer>{value => <Comp {...value}{...props} />}</Consumer>
}