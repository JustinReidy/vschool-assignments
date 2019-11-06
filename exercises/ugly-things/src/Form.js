import React, {Component} from 'react'
import {withProvider} from './OurProvider'

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>

                    <input type="text" name="imgUrl"/>
                    <input type="text" name="title"/>
                    <input type="text" name="desc"/>
                    <button>Submit</button>

                </form>
            </div>
        );
    }
}

export default withProvider(Form);