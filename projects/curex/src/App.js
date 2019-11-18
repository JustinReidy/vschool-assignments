import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Nav from './Nav'
import ItemContainer from './ItemContainer'
import About from './About' 
import Footer from './Footer'

function App(props) {
    
    
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={ItemContainer}/>
                <Route path='/About' component={About}/>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;