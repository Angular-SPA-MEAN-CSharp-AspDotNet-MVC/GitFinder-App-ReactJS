import React, {Component} from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import axios from 'axios';

class App extends Component {  

  state = {
    users: [],
    loading: false
  }
  
 async componentDidMount(){ 
      console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
      const res = await axios.get(`https://api.github.com/users?Client_Id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&&Client_Secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);           
      console.log(res.data);
      this.setState({users : res.data, loading: false});
}

  render(){
    return (
      <div className="App">     
          <Navbar title='github finder' icon='fab fa-github'></Navbar>
          <div className='container'>
            <Users users= {this.state.users}/>
          </div>
      </div>
    );
  }
}

export default App;
