import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class OurProvider extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            desc: '',
            imgUrl: '',
            items: []
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        let{title, desc, imgUrl} = this.state

        const newItem = {
            title,
            desc,
            imgUrl
        }

        this.setState(prevState => ({
            items: [...prevState.items, newItem]
        }))
        console.log(this.state.items[0])
    }

    render(){
        return(
            <Provider value={{...this.state, handleSubmit: this.handleSubmit, handleChange: this.handleChange}}>
                {this.props.children}
            </Provider>
        )
    }
}

export default OurProvider

export function withProvider (Comp){
    return props => <Consumer>{value => <Comp {...value}{...props} />}</Consumer>
}