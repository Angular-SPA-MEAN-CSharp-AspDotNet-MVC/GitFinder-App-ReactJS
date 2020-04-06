import React, {Component, Fragment} from 'react';
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


class App extends Component {  
  state = {
    users: [],
    user: {},
    repos:[],
    loading: false,
    alert: null,
  }
  
//  async componentDidMount(){ 
//       console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
//       const res = await axios.get(`https://api.github.com/users?Client_Id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_Secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);           
//       console.log(res.data);
//       this.setState({users : res.data, loading: false});
// }

searchUser = async (text) => {
  this.setState({loading: true});
  console.log('search Text is ' + text)
  const res = await axios.get(`https://api.github.com/search/users?q=`+
    `${text}&Client_Id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
    `&Client_Secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
  console.log(res);
  this.setState({users: res.data.items , loading: false});
}

  clearUser = () => {
    this.setState({users:[], loading: false})
  }

  getUser = async (login) => {  // 'login' is the username
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users/`+
    `${login}?Client_Id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
    `&Client_Secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
    this.setState({user: res.data, loading: false});
    console.log('res get');
    console.log(this.state.user);
  }

  getRepos = async (login) => {
    
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users/`+
    `${login}/repos?per_page=5&sort=created:asc&Client_Id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`+
    `&Client_Secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
    this.setState({repos: res.data, loading: false});
    console.log('res of repo get');
    //console.log(this.state.repos);

  }

  setAlert =(msg, type) =>{
    this.setState({alert: {msg, type}});

    setTimeout(()=> { this.setState({alert: null}) }, 3000);
  }

  render(){
    const {users, user, repos, loading} = this.state;  
    return (
      <Router>              
        <div className="App">     
          <Navbar title='github finder' icon='fab fa-github'></Navbar>
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact path='/' 
                render={props =>
                  <Fragment>
                      <Search searchUser={this.searchUser} 
                      clearUser={this.clearUser} 
                      showClearUser={users.length >0 ? true: false}
                      setAlert={this.setAlert}/>
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
                      getUser ={this.getUser} 
                      getRepos ={this.getRepos}                     
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
}

export default App;
