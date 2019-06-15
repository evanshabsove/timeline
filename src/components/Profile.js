import React, { Component } from 'react';
import './Profile.css';
import ProfilePicture from './ProfilePicture.js'
import ProfileBio from './ProfileBio.js'
import Timeline from './Timeline.js'

class Profile extends Component {
  render() {
    return (
      <div className="container flex-center flex-column text-center">
        <ProfilePicture />
        <ProfileBio />
        <Timeline />
      </div>
    );
  }
}

export default Profile;
