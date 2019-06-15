import React, { Component } from 'react';
import './ProfilePicture.css';

class ProfilePicture extends Component {
  render() {
    return (
      <img src="http://placekitten.com/300/300" className="img-rounded img-responsive profile-picture" alt="has-no-alt-:(" />
    );
  }
}

export default ProfilePicture;
