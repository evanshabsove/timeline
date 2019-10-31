import React, { Component } from 'react';
import './NavBar.css';
import { Link, Redirect } from 'react-router-dom'

class NavBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: false
    }

    this.logout = this.logout.bind(this)
  }

  componentDidMount(){
    if (localStorage.getItem("userId") == null) {
      this.setState({user: false})
    } else {
      this.setState({user: true})
    }
  }



  logout(){
    localStorage.removeItem("userId")
    localStorage.removeItem("token")
  }

  render() {
    const { user } = this.state
    if (user) {
      return (
        <nav>
          <ul className="nav-container">
            <li><Link to={`/users/${localStorage.getItem("userId")}`}>Profile</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/scan">Scan</Link></li>
            <li><Link to="/matches">Matches</Link></li>
            <li><a href="/register" onClick={() => this.logout()}>Logout</a></li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav>
          <ul className="nav-container">
            <li><Link to="/register">Home</Link></li>
            <li><a href="/register" onClick={() => this.logout()}>Logout</a></li>
          </ul>
        </nav>
      );
    }
  }
}

export default NavBar;
