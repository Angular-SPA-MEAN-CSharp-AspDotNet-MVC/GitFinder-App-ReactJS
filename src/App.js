import React, {Component} from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import Search from './component/users/Search';
import Alert from './component/Alert';
import axios from 'axios';

class App extends Component {  
  state = {
    users: [],
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
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&Client_Id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&Client_Secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
    console.log(res);
    this.setState({users: res.data.items , loading: false});
  }

  clearUser = () => {
    this.setState({users:[], loading: false})
  }

  setAlert =(msg, type) =>{
    this.setState({alert: {msg, type}});

    setTimeout(()=> { this.setState({alert: null}) }, 3000);
  }

  render(){
    const {users, loading} = this.state;  
    return (
      <div className="App">     
          <Navbar title='github finder' icon='fab fa-github'></Navbar>
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Search searchUser={this.searchUser} 
              clearUser={this.clearUser} 
              showClearUser={users.length >0 ? true: false}
              setAlert={this.setAlert}/>
            <Users loading={loading} users= {users}/>
          </div>
      </div>
    );
  }
}

export default App;
