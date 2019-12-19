import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const TicketContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function TicketProvider(props) {

    const handleNewTicket = () => {
        userAxios.post('/api/ticket/user')
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <TicketContext.Provider value = {{
            handleNewTicket: handleNewTicket
        }}>
            { props.children }
        </TicketContext.Provider>
    )

}

export default TicketProvider