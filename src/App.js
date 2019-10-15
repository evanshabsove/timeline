import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Homepage from './components/Homepage.js';
import './App.css';
import './Styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Homepage />
      </div>
    );
  }
}

export default App;
