import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Nav from './Nav'
import ItemContainer from './ItemContainer'
import About from './About' 
import Footer from './Footer'
import CurencyIndepth from './CurencyIndepth'

function App(props) {
    
    
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={ItemContainer}/>
                <Route path='/About' component={About}/>
                <Route path='/Currency/:CurencyId' component={CurencyIndepth} />
                {/* 404 error handling */}
                <Route render={
                    () => <h1>404 Not Found</h1>
                } />

            </Switch>
            <Footer />
        </div>
    );
}

export default App;