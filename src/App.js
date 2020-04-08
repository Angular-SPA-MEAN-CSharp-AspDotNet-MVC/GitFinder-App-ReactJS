import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import User from './component/pages/User';
import Alert from './component/Alert';
import About from './component/pages/About';
import Home from './component/pages/Home';
import NotFound from './component/pages/NotFound';

import './App.css';

import GithubState from './context/github/githubState';
import AlertState from './context/alert/AlertState';

const App = () => { 

  //const {users, user, repos, loading} = this.state;  
  return (
    <GithubState>
      <AlertState>
        <Router>              
          <div className="App">     
            <Navbar title='github finder' icon='fab fa-github'></Navbar>
            <div className='container'>
              <Alert/>
              <Switch>
                <Route
                  exact path='/' 
                  component ={Home}>
                </Route> 
                <Route
                  exact path='/about' component={About}>
                </Route> 
                <Route 
                  exact path='/user/:login'
                  component ={User}>
                </Route>
                <Route
                  component = {NotFound}>
                </Route>                    
              </Switch>
            </div>
          </div>
        </Router>   
      </AlertState>   
    </GithubState>
  );  
}

export default App;
