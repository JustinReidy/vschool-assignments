import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'
import MyContext from './MyProvider'
import './index.css'

ReactDOM.render(
    <MyContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MyContext>
    , document.getElementById('root'))