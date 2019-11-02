import React from 'react';
import {Link} from "react-router-dom"

function Nav(props) {
    const style = {
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "grey"
    }

    const logo = {
        color: "#720e9e"
    }

    const linkStyle = {
        lineHeight: "90px",
        textDecoration: 'none',
        color: "white"
    }

    return (
        <div style={style}>
            <h1 style={logo}>YahPoo! Plumbing</h1>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/About">About</Link>
            <Link style={linkStyle} to="/Services"> Services</Link>
        </div>
    );
}

export default Nav;