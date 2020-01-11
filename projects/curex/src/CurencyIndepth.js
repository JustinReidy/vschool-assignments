import React, { Component } from 'react';
import axios from 'axios'

import HistoricalGraph from './HistoricalGraph'

class CurencyIndepth extends Component {

    constructor(props){
        super(props)

        this.state = {
            historicalRates: [],
            base: ""
        }
    }

    componentDidMount() {
        axios.get("https://api.exchangeratesapi.io/history?start_at=1999-01-01&end_at=2019-12-31&base=USD&symbols=CAD").then(res => {
            const historical = []
            for (let key in res.data.rates){
                historical.push({x: new Date(key), y: Math.round(res.data.rates[key]["CAD"] * 100) /100})
            }
            this.setState({historicalRates: historical})
            this.setState({base: res.data.base})
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
        console.log(sortedDates)
        return (
            <div>
                {/* {sortedDates.length ?
                    sortedDates.map((day, index) => <h4 key={index}>{day.day}: {day.rate}</h4>)
                :
                    <h2>Loading...</h2>
                } */}
                <HistoricalGraph data={sortedDates}/>
            </div>
        );
    }
}

export default CurencyIndepth;