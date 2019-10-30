import React from 'react';
import Logo from './../logo.svg'

const Navbar = () => {
    const styles = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        
    }

    const imgStyles = {
        gridColumn: "1/2",
        height: "100px",
        width: "400px",
        color: "blue"
    }

    const linkStyles = {
        gridColumn: "2/-1",
        justifyContent: "right",
        textDecorationLine: "none",
        paddingRight: "5px"
    }
    return(
        
        <div style={styles}>

        <img style={imgStyles} src={Logo} alt="Aprature Science Logo"/>

        
            <a style={linkStyles} href="#">About Us</a>
            <a style={linkStyles} href="#">Contact Us</a>
            <a style={linkStyles} href="#">Success Stories</a>
        

        </div>

   )
}

export default Navbar