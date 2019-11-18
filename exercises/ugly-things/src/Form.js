import React, {Component} from 'react'
import {withProvider} from './OurProvider'

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        let style = {
            textAlign: 'Center'
        }

        return (
            <div style={style}>
                <form onSubmit={this.props.handleSubmit}>

                    <input onChange={this.props.handleChange} type="text" name="title"/>
                    <input onChange={this.props.handleChange} type="text" name="imgUrl"/>
                    <input onChange={this.props.handleChange} type="text" name="desc"/>
                    <button>Submit</button>

                </form>
            </div>
        );
    }
}

export default withProvider(Form);