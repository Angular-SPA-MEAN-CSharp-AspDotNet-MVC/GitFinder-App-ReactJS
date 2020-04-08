import React, {Fragment, useState} from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import User from './component/pages/User';
import Search from './component/users/Search';
import Alert from './component/Alert';
import About from './component/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubState from './context/github/githubState';

const App = () => { 
  const [alert, setAlert] = useState(null);

const showAlert =(msg, type) =>{
    setAlert({msg, type});

    setTimeout(()=> { setAlert(null) }, 3000);
  }

  //const {users, user, repos, loading} = this.state;  
  return (
    <GithubState>
      <Router>              
        <div className="App">     
          <Navbar title='github finder' icon='fab fa-github'></Navbar>
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact path='/' 
                render={props =>
                  <Fragment>
                      <Search
                        setAlert={showAlert}/>
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
    </GithubState>
  );  
}

export default App;
