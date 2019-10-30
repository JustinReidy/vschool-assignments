import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            diet: []
        }
    }

    handleChange = e => {
        let {name, value} = e.target
        if(name === 'diet'){
            const pArr = [...this.state.diet]
            pArr.includes(value) ? pArr.splice(pArr.indexOf(value), 1) : pArr.push(value)
            this.setState({diet: pArr})
        } else {
            this.setState({[name]: value})
        }
        
    }

    handleSubmit = e => {
        let{firstName, lastName, age, gender, destination, diet} = this.state
        e.preventDefault()
        alert(`Name: ${firstName} ${lastName} \n Age: ${age} \n Gender: ${gender} \n Destination: ${destination} \n Diet: ${diet}`)
    }
    
    render() {
        return (
            <div style={{textAlign: 'Center'}}>
                <form >

                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName}/>
                    <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastName}/>
                    <br />
                    <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange}/>
                    <br />
                    <label>Male</label><input type="radio" name="gender" value="Male"onChange={this.handleChange}/>
                    <label>Female</label><input type="radio" name="gender" value="Female"onChange={this.handleChange}/>
                    <br />
                    Destination <select value={this.state.value} name="destination" onChange={this.handleChange}>
                        <option></option>
                        <option value="Toronto">Toronto</option>
                        <option value="Edinburgh">Edinburgh</option>
                        <option value="Moscow">Moscow</option>
                    </select>
                    <br />
                    Vegan<input type="checkbox" name="diet" value="Vegan" onChange={this.handleChange}/>
                    Kosher<input type="checkbox" name="diet" value="Kosher" onChange={this.handleChange}/>
                    Lactose Free<input type="checkbox" name="diet" value="Lactose Free" onChange={this.handleChange}/>
                    <br />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;