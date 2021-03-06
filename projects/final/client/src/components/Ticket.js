import React, {useState} from 'react'

function Ticket(props) {
    const { problem, company, severity, paid, completed} = props
    
    const ticket = {
        
    }
    const [paidToggle, setPaidToggle] = useState(paid)
    const [completedToggle, setCompletedToggle] = useState(completed)

    const handlePaidToggle = e => {
        setPaidToggle(prevToggle => !prevToggle)
    }

    const handleCompletedToggle = e => {
        setCompletedToggle(prevToggle => !prevToggle)
    }

    const tickets = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        border: "solid 3px black",
        margin: "6px"
    }

    return(
        <div style={tickets}>

        { !completedToggle ?
                <>
                    <p><span>Issue: </span>{problem}</p>
                
                    <p><span>Company: </span>{company}</p>
                
                
                    <p><span>Priority: </span>{severity}</p>
                
                    {!paidToggle ?                                            
                        <p  onClick={handlePaidToggle}><span>Paid: </span>Unpaid</p>
                    :
                        <p  onClick={handlePaidToggle}><span>Paid: </span>Paid</p>
                    }

                    <p onClick={handleCompletedToggle}><span>Completed: </span>Not Completed</p>
                </>
                :
                null
            }

        </div>
    )
}

export default Ticket