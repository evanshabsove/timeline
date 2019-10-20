import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'

class NavBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: [
      ]
    }
  }

  render() {
    return (
      <nav>
        <ul className="nav-container">
          <li><Link to="/">Home</Link></li>
          <li><Link to={`/users/${localStorage.getItem("userId")}`}>Profile</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/scan">Scan</Link></li>
          <li><Link to="/matches">Matches</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
