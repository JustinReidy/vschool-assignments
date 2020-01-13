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
        let startDate = ["1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]

        for(let i = 0; i < startDate.length; i++){
            axios.get(`https://api.exchangeratesapi.io/history?start_at=${startDate[i]}-01-01&end_at=2019-12-31&base=${CurencyId.split("-")[0]}&symbols=${CurencyId.split("-")[1]}`)
            .then(res => {
                const historical = []
                for (let key in res.data.rates){
                    historical.push({x: new Date(key), y: Math.round(res.data.rates[key][CurencyId.split("-")[1]] * 100) /100})
                }
                
                this.setState({historicalRates: historical})
                if(res.status === 200){
                    i = startDate.length
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
        
    }

    render() {

        console.log(this.state.historicalRates)

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