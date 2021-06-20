import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './Components/Inicio';
import Admin from './Components/Admin';
import Login from './Components/Login';
import Menu from './Components/Menu';


function App() {
  return (
    <div className="container">
      <Router>
        <Menu></Menu>
        <Switch>
          <Route exact path='/' component={Inicio}></Route>
          <Route path='/admin' component={Admin}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
