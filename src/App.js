import React, {Component} from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';

class App extends Component {
  render(){
    return (
      <div className="App">     
          <Navbar title='github finder' icon='fab fa-github'></Navbar>
      </div>
    );
  }
}

export default App;
