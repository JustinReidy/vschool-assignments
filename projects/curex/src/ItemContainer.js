import React, {Component} from 'react'
import {withData} from './MyProvider'

import Item from './Item'

class ItemContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            base: '',
            date: '',
            img: '',
            rates: [],
            count: 0,
            keys: ["CAD", "HKD", "ISK", "PHP", "DKK", "HUF", "CZK", "GBP", "RON", "SEK", "IDR", "INR", "BRL", "RUB", "HRK", "JPY", "THB", "CHF", "EUR", "MYR", "BGN", "TRY", "CNY", "NOK", "NZD", "ZAR", "USD", "MXN", "SGD", "AUD", "ILS", "KRW", "PLN"]
        }
    }

    
    
    componentDidMount() {
        this.props.handleAxios()
    }
    
    

    render() {
        console.log(this.props.baseVal)
        const mappedRates = this.props.rates.map((rate, index) => <Item  key={this.props.base + '-' + this.state.keys[index]} 
                                                                base={this.props.base} 
                                                                rate={rate}
                                                                link={this.props.base + '-' + this.state.keys[index]}/>)
        return (
            <div className="">
                <div className="flex flex-wrap ">
                    {mappedRates}
                </div>
            </div>
        );
    }
}

export default withData(ItemContainer);
