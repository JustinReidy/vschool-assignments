import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import TicketForm from './TicketForm'
import { TicketContext } from '../context/TicketProvider'

const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function NewTicket() {
    const initState = {problem: "", severity: "Low", company: "", completed: true, paid: true}

    const [inputs, setInputs] = useState(initState)
    const [redirect, setRedirect] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
        console.log(inputs)
    }
    
    const handleTicketSubmit = (e) => {
        e.preventDefault()
        userAxios.post("/api/ticket", inputs)
        .then(res => {
            setInputs(initState)
            setRedirect(true)
        })
        .catch(err => console.log(err))
    }

    if(redirect){
        return <Redirect to='/tickets' />
    }

    return(
        <div>
            <TicketForm inputs={inputs} handleChange={handleChange} handleSubmit={handleTicketSubmit} />
        </div>
    )
}

export default NewTicket