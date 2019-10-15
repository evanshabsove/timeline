import React, { Component } from 'react';
import Profile from './components/Profile.js';

class ProfilePage extends Component {

  constructor(props){
    super(props)
    this.state = {
      userId: this.props.match.params.userId
    }
  }

  render() {
    return (
      <div className="ProfilePage">
        <Profile userId={this.state.userId} />
      </div>
    );
  }
}

export default ProfilePage;
