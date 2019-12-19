import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") ||"",
        tickets: [],
        authErrMsg: ""
    }

    const [userState, setUserState] = useState(initState)

    const signup = credentials => {
        axios.post("/auth/signup", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            setUserState(res.data)
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }
    
    const login = credentials => {
        axios.post("/auth/login", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            setUserState(res.data)
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const handleAuthErr = errMsg => {
        setUserState(prevUserState => ({
            ...prevUserState,
            authErrMsg: errMsg
        }))
    }

    const clearAuthErr = () => {
        setUserState(prevUserState => ({
            ...prevUserState,
            authErrMsg: ""
        }))
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: ""
        })
    }

    const getTickets = () => {
        userAxios.get('/api/ticket/user')
        .then(res => {
            console.log(res.data)
            setUserState(prevUserState => ({
                ...prevUserState,
                tickets: [...res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider value = {{
            user: userState.user,
            token: userState.token,
            tickets: userState.tickets,
            authErrMsg: userState.authErrMsg,
            clearAuthErr: clearAuthErr,
            signup: signup,
            login: login,
            logout: logout,
            getTickets: getTickets
        }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider