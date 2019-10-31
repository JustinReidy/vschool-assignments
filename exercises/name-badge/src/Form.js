import React, { Component } from 'react';
import BadgeContainer from './badgeContainer'

class Form extends Component {
    constructor(){
        super()

        this.state ={
            fName: "",
            lName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            about: "",
            badges: []
        }
    }

    handleChange = e => {
        let {name, value} = e.target

        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        let {fName, lName, email, birthPlace, phone, favFood, about} = this.state

        const newBadge = {
            fName,
            lName,
            email,
            birthPlace,
            phone,
            favFood,
            about,
        }

        this.setState(prevState => ({
            fName: "",
            lName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            about: "",
            badges: [...prevState.badges, newBadge]
        }))
    }


    render() {
        let {fName, lName, email, birthPlace, phone, favFood, about} = this.state

        const form = {
            textAlign: "center",
            marginBottom: "10px",
            border: "1px solid black",
            padding: "25px 50px",
            borderRadius: "25px"
        }

        const formInputs = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "10px",
            paddingBottom: "10px"
        } 

        const textarea = {
            width: "75%",
            resize: "none"
        }
        return (
            <div>
                    <div style={form}>
                        <form onSubmit={this.handleSubmit}>
                            <div style={formInputs}>
                                <input onChange={this.handleChange} name="fName" value={fName} type="text" placeholder="First Name" required/>
                                <input onChange={this.handleChange} name="lName" value={lName} type="text" placeholder="Last Name" required/>
                                <input onChange={this.handleChange} name="email" value={email} type="email" placeholder="Email" required/>
                                <input onChange={this.handleChange} name="birthPlace" value={birthPlace} type="text" placeholder="Place of Birth" required/>
                                <input onChange={this.handleChange} name="phone" value={phone} type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="Phone" required/>
                                <input onChange={this.handleChange} name="favFood" value={favFood} type="text" placeholder="Favorite Food" required/>
                            </div>
                            <div>
                                <textarea onChange={this.handleChange} name="about" value={about} style={textarea} cols="100" rows="8" placeholder="Tell us about yourself" required></textarea>
                                <br/>
                                <button>Submit</button>
                            </div>

                        </form>
                    </div>
                

                <div>
                    <BadgeContainer badges={this.state.badges} />
                </div>
            </div>
        );
    }
}

export default Form;