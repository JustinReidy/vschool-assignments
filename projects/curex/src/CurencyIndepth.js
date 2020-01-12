import React, { Component } from 'react';
import axios from 'axios'

import HistoricalGraph from './HistoricalGraph'

class CurencyIndepth extends Component {

    constructor(props){
        super(props)

        this.state = {
            historicalRates: [],
            symbols: []
        }
    }

    componentDidMount() {
        this.setState({symbols: this.props.match.params.CurencyId.split("-")[0]})
        // console.log(this.state.symbols.length)
        axios.get(`https://api.exchangeratesapi.io/history?start_at=1999-01-01&end_at=2019-12-31&base=${this.props.match.params.CurencyId.split("-")[0]}&symbols=${this.props.match.params.CurencyId.split("-")[1]}`).then(res => {
        console.log("Inside Axios")    
        const historical = []
            for (let key in res.data.rates){
                historical.push({x: new Date(key), y: Math.round(res.data.rates[key][this.props.match.params.CurencyId.split("-")[1]] * 100) /100})
            }
            this.setState({historicalRates: historical})
        })
    }

    render() {
        let sortedDates = this.state.historicalRates.slice().sort((a, b) => {
            let key1 = a.x
            let key2 = b.x
                if(key1 < key2){
                    return -1
                } else if (key1 === key2){
                    return 0
                } else {
                    return 1
                }
        })
        let mappedRates = sortedDates.map(( rate, index ) => (<p key={index}>Date: {rate.date}</p>))
        // console.log(mappedRates)
        // console.log(this.props.match.params.CurencyId.split("-")[1])
        return (
            <div>
                <h1 className="text-xl" >{this.props.match.params.CurencyId.split("-")[0]} -> {this.props.match.params.CurencyId.split("-")[1]}: Historical Data</h1>
                <HistoricalGraph data={sortedDates}/>
            </div>
        );
    }
}

export default CurencyIndepth;