import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryZoomContainer } from 'victory'

class HistoricalGraph extends Component {
    constructor(props){
        super(props)

        this.state = {
            // data: []
        }
    }    
    
    render() {
        let data = this.props.data
        console.log(data)
        return (
            <div>
                <VictoryChart scale={{x: "time"}} containerComponent={<VictoryZoomContainer/>}>
                <VictoryAxis />
                <VictoryAxis dependentAxis tickFormat={(tick) => `$${tick}`}/>
                    <VictoryLine
                    animate={{
                        duration: 2000,
                        easing: "bounce"
                    }}
                    data={[...data]}
                    />

                </VictoryChart>
            </div>
        );
    }
}

export default HistoricalGraph;