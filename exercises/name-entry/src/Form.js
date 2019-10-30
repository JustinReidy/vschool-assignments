import React, { Component } from 'react';

import ItemContainer from './itemContainer'

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            names: []
        }
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        let {name} = this.state;

        const newItem = {
            name
        }

        this.setState(prev => {
            return{
                names: [...prev.names, newItem]
            }
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input type="text" name="name" placeholder="Your Name" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>

                <h1>{this.state.name}</h1>

                <ItemContainer name={this.state.names} />
            </div>
        );
    }
}

export default Form;