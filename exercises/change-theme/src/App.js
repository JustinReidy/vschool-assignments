import React from 'react'
import {withProvider} from './OurProvider'
import './app.css'

function App(props){
    return(
        <div className={props.on ? 'light-header' : 'dark-header'}>

            <h1>Hello World</h1>
            <button onClick={props.toggle}>Change Theme</button>

        </div>
    )
}

export default withProvider(App)