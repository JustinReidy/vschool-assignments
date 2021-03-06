import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import {UserContext} from '../context/UserProvider' 

function Auth() {

    const initState = {username: "", password: ""}

    const {signup, login, authErrMsg, clearAuthErr} = useContext(UserContext)

    const [inputs, setInputs] = useState(initState)
    const [toggle, setToggle] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSignupSubmit = e => {
        e.preventDefault()
        signup(inputs)
        setInputs(initState)
    }

    const handleLoginSubmit = e => {
        e.preventDefault()
        login(inputs)
        setInputs(initState)

    }

    const toggleForms = () => {
        setToggle(prevToggle => !prevToggle)
        clearAuthErr()
    }

    return (
        <div>
            {!toggle ?
                <>
                    <AuthForm inputs={inputs} handleChange={handleChange} handleSubmit={handleSignupSubmit} btnText="Signup"/>
                    <p style={{color: 'red'}}>{authErrMsg}</p>
                    <button onClick={toggleForms}>Already A Member?</button>
                </>
            :
                <>
                    <AuthForm inputs={inputs} handleChange={handleChange} handleSubmit={handleLoginSubmit} btnText="Login"/>
                    <p style={{color: 'red'}}>{authErrMsg}</p>
                    <button onClick={toggleForms}>Not A Member?</button>
                </>
            }
        </div>
    )
}

export default Auth