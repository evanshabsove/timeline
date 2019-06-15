import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Profile from './components/Profile.js';
import Timeline from './components/Timeline.js';
import logo from './logo.svg';
import './App.css';
import './Styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Profile />
        <Timeline />
      </div>
    );
  }
}

export default App;
