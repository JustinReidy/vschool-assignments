import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import {UserContext} from '../context/UserProvider'
import CompleteTicket from './CompleteTicket'
import '../styles/Tickets.css'

const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


function CompletedTickets() {
    const { getTickets, tickets } = useContext(UserContext)
    const [toggle, setToggle] = useState(false)
    
    useEffect(() => {
        getTickets()
    }, [])
    
    const labels = {
        display: "flex",
        justifyContent: "space-around"
    }

    const style = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "5px"
    }

    const handleToggle = e => {
        setToggle(true)
    }

    const handleDelete = (ticketId) => {
        return userAxios.delete(`/api/ticket/${ticketId}`).then(res => {

        })
        .catch(err => {
            console.log(err)
        })
    }
    
    return(
        <div>
            <a href="/NewTicket" className="buttonLink">Create New Ticket</a> 
            
            { tickets === undefined ?
                <h1>Loading...</h1>
                :
                tickets.map(ticket => <CompleteTicket style={style} key={ticket._id} id={ticket._id} problem={ticket.problem}
                                            company={ticket.company}
                                            severity={ticket.severity}
                                            paid={ticket.paid}
                                            completed={ticket.completed}
                                            handlePaid={handleToggle}
                                            handleDelete={handleDelete}
                                        />)
            }

        </div>
    )

}

export default CompletedTickets