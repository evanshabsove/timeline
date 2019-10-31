import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import './App.css';
import './Styles.css';
import { Redirect } from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: ""
    }
  }

  componentDidMount(){
    if (localStorage.getItem("userId") == null) {
      this.setState({user: false})
    } else {
      this.setState({user: true})
    }
  }

  render() {
    const { user } = this.state;
    if (user === false) {
      return <Redirect to='/register'/>;
    }
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
