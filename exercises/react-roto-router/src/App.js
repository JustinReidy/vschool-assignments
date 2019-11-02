import React from 'react';
import { Switch, Route } from "react-router-dom" 

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Services from './Services'
import Footer from './Footer'

function App(props) {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;