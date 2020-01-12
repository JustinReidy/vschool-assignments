import React, { Component } from 'react';
import axios from 'axios'

import HistoricalGraph from './HistoricalGraph'

class CurencyIndepth extends Component {

    
    constructor(props){
        super(props)
        
        this.state = {
            historicalRates: [],
            symbols: [],
            startDate: ""
        }
    }
    
    componentDidMount() {
        let { CurencyId } = this.props.match.params
        let startDate = ""
        this.setState({symbols: CurencyId.split("-")[0]})
        if(CurencyId.split("-")[1] === "PHP" || CurencyId.split("-")[1] === "RON" || CurencyId.split("-")[1] === "IDR" || CurencyId.split("-")[1] === "RUB" || CurencyId.split("-")[1] === "HRK" || CurencyId.split("-")[1] === "THB" || CurencyId.split("-")[1] === "MYR" || CurencyId.split("-")[1] === "CNY"){
            startDate = "2006-01-01"
        } else if (CurencyId.split("-")[1] === "BGN"){
            startDate = "2001-01-01"
        } else if (CurencyId.split("-")[1] === "TRY"){
            startDate = "2005-01-01"
        } else if (CurencyId.split("-")[1] === "MXN" || CurencyId.split("-")[1] === "BRL"){
            startDate = "2008-01-01"
        } else if (CurencyId.split("-")[1] === "ILS"){
            startDate = "2011-01-01"
        } else {
            startDate = "1999-01-01"
        }
        axios.get(`https://api.exchangeratesapi.io/history?start_at=${startDate}&end_at=2019-12-31&base=${CurencyId.split("-")[0]}&symbols=${CurencyId.split("-")[1]}`).then(res => {   
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
        
        let { CurencyId } = this.props.match.params
        return (
            <div>
                <h1 className="text-xl" >{CurencyId.split("-")[0]} -> {CurencyId.split("-")[1]}: Historical Data</h1>
                <HistoricalGraph data={sortedDates}/>
            </div>
        );
    }
}

export default CurencyIndepth;