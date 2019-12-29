import React, {useState} from 'react'

function Ticket(props) {
    const { id, key, problem, company, severity, paid, completed, handleDelete} = props
    
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
    const deleteButton = {
        backgroundColor: "red",
        color: "white"
    }

    console.log(id._id)

    return(

            <div style={tickets}>
            { completedToggle ?
                <>
                    <p><span>Issue: </span>{problem}</p>
                
                    <p><span>Company: </span>{company}</p>
                
                
                    <p><span>Priority: </span>{severity}</p>
                
                    {!paidToggle ?                                            
                        <p  onClick={handlePaidToggle}><span>Paid: </span>Unpaid</p>
                    :
                        <p  onClick={handlePaidToggle}><span>Paid: </span>Paid</p>
                    }

                    <p onClick={handleCompletedToggle}><span>Completed: </span>Completed</p>
                </>
                :
                null
            }

            <button onClick={() => handleDelete(key)} style={deleteButton}>DELETE</button>

        </div>
    )
}

export default Ticket