import React, { Component } from 'react';
import './ProfileBio.css';
import { Link } from 'react-router-dom'

class ProfileBio extends Component {

  renderEditIfOwner(isOwner, userId){
    if(isOwner === true){
      return <Link to={`/editUser/${userId}`}>Edit</Link>
    }
  }

  render() {
    const { isOwner, userId} = this.props;
    const full_name = `${this.props.user.given_name} ${this.props.user.family_name}`;
    return (
      <div>
        <h3>{full_name}</h3>
        <p>I'm 24, super cool, and am the developer behind this site AMA!</p>
        {this.renderEditIfOwner(isOwner, userId)}
      </div>
    );
  }
}

export default ProfileBio;
