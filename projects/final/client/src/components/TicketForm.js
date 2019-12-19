import React from 'react'

function TicketForm(props){
    const {handleChange, handleSubmit, inputs: { problem, severity, company, completed, paid }} = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="company" value={company} placeholder="Company"/>
                <input onChange={handleChange} type="text" name="problem" value={problem} placeholder="Issue"/>
                <select onChange={handleChange} type="text" name="severity" placeholder="Severity">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <select onChange={handleChange} type="text" name="paid" placeholder="Paid">
                    <option value="true">Paid</option>
                    <option value="false">Unpaid</option>
                </select>
                <select onChange={handleChange} type="text" name="completed" placeholder="Completed">
                    <option value="true">Completed</option>
                    <option value="false">Not Completed</option>
                </select>

                <button>Submit New Ticket</button>
            </form>
        </div>
    )
}

export default TicketForm