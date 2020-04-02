import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryZoomContainer } from 'victory'

class HistoricalGraph extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }    
    
    render() {
        let data = this.props.data
        return (
            <div>
                <VictoryChart scale={{x: "time"}} containerComponent={<VictoryZoomContainer/>}>
                <VictoryAxis />
                <VictoryAxis dependentAxis tickFormat={(tick) => `$${tick}`}/>
                    <VictoryLine
                    data={[...data]}
                    />

                </VictoryChart>
            </div>
        );
    }
}

export default HistoricalGraph;