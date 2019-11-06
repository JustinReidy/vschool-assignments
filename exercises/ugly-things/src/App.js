import React from 'react';
import Form from './Form'
import {withProvider} from './OurProvider'

function App(props) {
    return (
        <div>
           <Form />
        </div>
    );
}

export default withProvider(App);