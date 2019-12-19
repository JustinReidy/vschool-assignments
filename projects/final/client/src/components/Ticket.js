import React, {useState} from 'react'

function Ticket(props) {
    const { problem, company, severity, paid, completed} = props
    const style = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
    }
    const ticket = {
        display: "flex",
        justifyContent: "space-around",
        gridColumn: "1/-1",
        border: "solid 3px black",
        marginBottom: "6px",
        marginLeft: "6px",
        marginRight: "6px",
        marginTop: "6px"
    }
    // const problemStyle = {
    //     gridColumn: "1/2"
        
    // }
    // const companyStyle = {
    //     gridColumn: "2/3"
    // }
    // const severityStyle = {
    //     gridColumn: "3/4"
    // }
    // const paidStyle = {
    //     gridColumn: "4/5"
    // }
    // const completedStyle = {
    //     gridColumn: "5/-1"
    // }

    const [paidToggle, setPaidToggle] = useState(paid)
    const [completedToggle, setCompletedToggle] = useState(completed)

    const handlePaidToggle = e => {
        setPaidToggle(prevToggle => !prevToggle)
    }

    const handleCompletedToggle = e => {
        setCompletedToggle(prevToggle => !prevToggle)
    }

    return(
        <div style={style}>
            
            <div style={ticket}>
                <p>{problem}</p>
                <p>{company}</p>
                <p>{severity}</p>
                {!paidToggle ?                                            
                    <p  onClick={handlePaidToggle}>Unpaid</p>
                :
                    <p  onClick={handlePaidToggle}>Paid</p>
                }
                {completedToggle ?
                    <p onClick={handleCompletedToggle}>Completed</p>
                :
                    <p onClick={handleCompletedToggle}>In Progress</p>
                }

            </div>
        </div>
    )
}

export default Ticket