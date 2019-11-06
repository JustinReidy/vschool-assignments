import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import OurProvider from './OurProvider'

ReactDOM.render(
    <OurProvider>
        <App />
    </OurProvider>
, document.getElementById('root'))