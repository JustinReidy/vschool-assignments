import React, { Component } from 'react';
import axios from 'axios'

import {withData} from './BountyProvider'

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            isAlive: true,
            type: 'jedi',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        
        const passSubmit = e => {
            this.props.handleSubmit(e)
        }

        return (
            <div>
                <form onSubmit={passSubmit}>
                    <input onChange={this.handleChange} type="text" name="firstName" placeholder="First Name" id="" required/>
                    <input onChange={this.handleChange} type="text" name="lastName" placeholder="LastName" id=""required/>
                    <select onChange={this.handleChange} name="isAlive" id="">
                        <option value="true">Alive</option>
                        <option value="false">Dead</option>
                    </select>
                    <select onChange={this.handleChange} name="type" id="">
                        <option value="jedi">Jedi</option>
                        <option value="sith">Sith</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default withData(Form);