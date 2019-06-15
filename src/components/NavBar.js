import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-container">
          <li>Home</li>
          <li>Profile</li>
          <li className="search">
            <input type="text" className="search-input" placeholder="Search" />
          </li>
          <li>Logout</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
