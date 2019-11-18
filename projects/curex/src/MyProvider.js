import React, {Component} from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class MyProvider extends Component {
    constructor(){
        super()

        this.state = {
            date: '',
            base: '',
            baseVal: 'USD',
            rates: []
        }
    }
    handleAxios = () => {
        axios.get('https://api.exchangeratesapi.io/latest?base=' + this.state.baseVal).then(res => {
            const rates = []
            for(let key in res.data.rates){
                rates.push({[key]: res.data.rates[key]})    
            }
            this.setState({base: res.data.base, date: res.data.date, rates})
        })
    }
    
    handleBase = e => {
        e.preventDefault()
        let {value} = e.target[0]
        this.setState({baseVal: value.toUpperCase()})
        this.handleAxios()
    }


    render() {
        return (
            <Provider value={{
                ...this.state,
                handleBase: this.handleBase,
                baseValue: this.baseValue,
                handleAxios: this.handleAxios
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default MyProvider

export function withData(Component){
    return props => <Consumer>
        {value => <Component {...value} {...props} />}
        </Consumer>
}