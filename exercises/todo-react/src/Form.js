import React, { PureComponent } from 'react'

class Form extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            imgUrl: "",
            description: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({
            title: "",
            imgUrl: "",
            description: ""
        })
    }

    render() {
        const style = {
            display: 'flex',
            flexDirection: 'column',
            height: "120px",
            justifyContent: 'space-around',
            alignItems: "center",
            border: "2px solid black",
            padding: "20px"
        }

        return (
            <form onSubmit={this.handleSubmit} style={style}>
                <label htmlFor="title">Title: 
                    <input 
                    id="title"
                    onChange={this.handleChange} 
                    value={this.state.title} 
                    name="title"/>
                </label>
                <label htmlFor="img">Image Url:
                    <input 
                    id="img"
                    onChange={this.handleChange} 
                    value={this.state.imgUrl} 
                    name="imgUrl"/>
                </label>
                <label htmlFor="description">Description:
                    <input 
                    id="description"
                    onChange={this.handleChange} 
                    value={this.state.description} 
                    name="description"/>
                </label>
                <button>submit</button>
            </form>
        )
    }
}

export default Form