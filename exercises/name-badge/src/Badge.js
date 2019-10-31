import React from 'react';

function Badge(props) {
    const styles = {
        textAlign: "center",
        border: "1px solid black",
        borderRadius: "25px",
        paddingBottom: "15px"
        
    }

    const badgeElements = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
    }

    const textArea = {
        width: "75%",
        resize: "none"
    }

    return (
        <div style={styles}>
            <div style={badgeElements}>
                <h4>Name: {props.fName} {props.lName}</h4>
                <h4>Phone: {props.phone}</h4>
                <h4>Place of Birth: {props.birthPlace}</h4>
                <h4>Favorite Food: {props.favFood}</h4>
                <h4>Email: {props.email}</h4>
            </div>
            <div>
                <textarea style={textArea} value={props.about} cols="100" rows="8" readonly></textarea>
            </div>
        </div>
    );
}

export default Badge;