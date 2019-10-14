import React, { Component } from 'react';
import './ProfileBio.css';

class ProfileBio extends Component {

  render() {
    const {user:{given_name, family_name}} = this.props;
    const full_name = `${this.props.user.given_name} ${this.props.user.family_name}`;
    return (
      <div>
        <h3>{full_name}</h3>
        <p>I'm 24, super cool, and am the developer behind this site AMA!</p>
      </div>
    );
  }
}

export default ProfileBio;
