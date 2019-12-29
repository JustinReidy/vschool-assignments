import React, { useContext } from 'react';
import Auth from './components/Auth'
import Tickets from './components/Tickets'
import CompletedTickets from './components/CompletedTickets'
import Navbar from './components/Navbar'
import NewTicket from './components/NewTicket'
import ProtectedRoute from './shared/ProtectedRoute'
import { Switch, Route, Redirect } from "react-router-dom"
import { UserContext } from './context/UserProvider'

function App() {

  const { token, logout } = useContext(UserContext)

  return (
    <div>
      { token && <Navbar logout={logout}/> }
      <Switch>
        <Route exact path="/" render={rProps => token ? <Redirect to='/tickets'/> : <Auth {...rProps} />} />
        <ProtectedRoute path="/Tickets" component={Tickets} redirectTo="/" />
        <ProtectedRoute path="/CompletedTickets" component={CompletedTickets} redirectTo="/" />
        <ProtectedRoute path="/NewTicket" component={NewTicket} redirectTo="/" />
      </Switch>

    </div>
  );
}

export default App;
 