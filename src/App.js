import React, {Fragment} from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import User from './component/pages/User';
import Search from './component/users/Search';
import Alert from './component/Alert';
import About from './component/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
                  render={props =>
                    <Fragment>
                        <Search/>
                        <Users/>  
                    </Fragment>}>
                </Route> 
                <Route
                  exact path='/about' component={About}>
                </Route> 
                <Route 
                  exact path='/user/:login'
                  component ={User}>
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
