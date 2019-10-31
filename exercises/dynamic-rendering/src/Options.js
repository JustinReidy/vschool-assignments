import React, {Component} from 'react';

class Options extends Component {
    constructor(){
        super()

        this.state = {
            toggle: false
        }
    }

    handleToggle = () => {
        this.setState(prevState => {
            return {toggle: !prevState.toggle}
            
        })
    }

    
    render(){

        const styles = {
            display: "flex",
            alignItems: "center"

        }

        let visibility;

        if(this.state.toggle){
            visibility = "visible"
        } else {
            visibility = "hidden"
        }

        const toggleableInputStyles = {
            visibility: visibility
        }

        return (
            <div style={styles}>
                <select name="greeting drop down" id="greeting-options">
                    <option value="">hello</option>
                    <option value="">hi</option>
                    <option value="">Good day, all you fine people</option>
                </select>
                <br />
                <label>change color?</label> <input onChange={this.handleToggle} name="changeColor"type="checkbox"/>
                <label  style={toggleableInputStyles}for="color">what color? 
                    <input onChange={this.props.handleChange} id="color" name="color" value={this.props.color} placeholder="#bada55"/>
                </label>
            </div>
        )
    }
    
}

export default Options;