import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';
import Navbar from './Components/Layout/Navbar';
import Auser from './Components/Users/Auser';
import './App.css';

import GithubState from './Context/Github/githubState'
import AlertState from './Context/Alert/alertState'

const App = () => {
  return (
    <GithubState>
      <AlertState>
      <Router>
        <div className="App">
            <Navbar/>
            <div className="container">
              <Switch>
                  <Route exact path = '/' component={Home}/>
                  <Route exact path = '/About' component={About}/>
                  <Route exact path = '/user/:login' component={Auser}/>
                  <Route component={NotFound}/>
              </Switch>
            </div>
        </div>
      </Router>
      </AlertState>
      </GithubState>
    );
}

export default App;
