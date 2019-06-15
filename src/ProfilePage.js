import React, { Component } from 'react';
import Profile from './components/Profile.js';
import logo from './logo.svg';

class ProfilePage extends Component {
  render() {
    return (
      <div className="ProfilePage">
        <Profile />
      </div>
    );
  }
}

export default ProfilePage;
