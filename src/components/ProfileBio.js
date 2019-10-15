import React, { Component } from 'react';
import './ProfileBio.css';
import { Link } from 'react-router-dom'

class ProfileBio extends Component {

  renderEditIfOwner(isOwner, id){
    if(isOwner === true){
      return <Link to={`/users/${id}/edit`}>Edit</Link>
    }
  }

  render() {
    const {user:{given_name, family_name, id}, isOwner} = this.props;
    const full_name = `${this.props.user.given_name} ${this.props.user.family_name}`;
    return (
      <div>
        <h3>{full_name}</h3>
        <p>I'm 24, super cool, and am the developer behind this site AMA!</p>
        {this.renderEditIfOwner(isOwner, id)}
      </div>
    );
  }
}

export default ProfileBio;
