import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Navbar.css'

function Navbar (props) {
    return (
        <div className="main">
            <Link className="linkGridOne" to="/tickets"><span className="linkTextOne">Tickets</span></Link>
            <Link className="linkGridTwo" to="/CompletedTickets"><span className="linkTextTwo">Completed Tickets</span></Link>
            <button className="button"  onClick={props.logout}>Logout</button>
        </div>
    )
}

export default Navbar