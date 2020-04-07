import React, {Fragment, useState} from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import User from './component/pages/User';
import Search from './component/users/Search';
import Alert from './component/Alert';
import About from './component/pages/About';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Repos } from './component/pages/Repos';


const App = () => { 
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  

//  async componentDidMount(){ 
//       console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
//       const res = await axios.get(`https://api.github.com/users?Client_Id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_Secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);           
//       console.log(res.data);
//       this.setState({users : res.data, loading: false});
// }

const searchUser = async (text) => {
  setLoading(true);
  console.log('search Text is ' + text)
  const res = await axios.get(`https://api.github.com/search/users?q=`+
    `${text}&Client_Id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
    `&Client_Secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
  console.log(res);
  setUsers( res.data.items);
  setLoading(false);
}

const clearUser = () => {
    setUsers( [] );
    setLoading(false);
  }

const getUser = async (login) => {  // 'login' is the username
    
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/`+
    `${login}?Client_Id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
    `&Client_Secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
    setUser( res.data);
    setLoading(false);
    console.log('res get');
    console.log(user);
  }

const getRepos = async (login) => {
    
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/`+
    `${login}/repos?per_page=5&sort=created:asc&Client_Id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
    `&Client_Secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
    setRepos(res.data);
    console.log('res of repo get');
    setLoading(false);
    //console.log(this.state.repos);

  }

const showAlert =(msg, type) =>{
    setAlert({msg, type});

    setTimeout(()=> { setAlert(null) }, 3000);
  }

  //const {users, user, repos, loading} = this.state;  
  return (
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
                    <Search searchUser={searchUser} 
                    clearUser={clearUser} 
                    showClearUser={users.length >0 ? true: false}
                    setAlert={showAlert}/>
                    <Users loading={loading} users= {users}/>  
                </Fragment>}>
            </Route> 
            <Route
              exact path='/about' component={About}>
            </Route> 
            <Route 
              exact path='/user/:login'
              render={props => 
                <Fragment>
                  <User
                    {...props}
                    user = {user} 
                    repos = {repos}
                    getUser ={getUser} 
                    getRepos ={getRepos}                     
                    loading ={loading}
                  ></User>
                </Fragment>}>
            </Route>                    
          </Switch>
        </div>
    </div>
    </Router>

  );
  
}

export default App;
