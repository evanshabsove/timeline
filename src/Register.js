import React, { Component } from 'react';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';

class Register extends Component {
  render() {
    return (
      <div className="Register">
        <Login />
        <SignUp />
      </div>
    );
  }
}

export default Register;
