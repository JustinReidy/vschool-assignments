import React, { Component } from 'react';
import axios from 'axios'

class CurencyIndepth extends Component {

    constructor(props){
        super(props)

        this.state = {
            historicalRates: [],
            base: ""
        }
    }

    componentDidMount() {
        axios.get("https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-01-09&base=USD&symbols=CAD").then(res => {
            const historical = []
            for (let key in res.data.rates){
                historical.push({[key]: res.data.rates[key]})
            }
            this.setState({historicalRates: historical})
            this.setState({base: res.data.base})
        })
    }
    
    // pushToHistorical = () => {
    //     let historical = []
    //     for(let i = 0; i <= this.state.temp; i++){
    //         historical.push({date: Object.keys(this.state.temp), value: Object.values(this.state.temp)})
    //     }
    //     console.log(historical)
    //     console.log(Object.values(this.state.temp))
    // }

    render() {
        // console.log(this.state.historicalRates.map(rate))
        // this.pushToHistorical()
        let mappedRates = this.state.historicalRates.map((rates, index) => console.log(rates))
        return (
            <div>
                {mappedRates}
            </div>
        );
    }
}

export default CurencyIndepth;