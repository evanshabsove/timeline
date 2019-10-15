import React, { Component } from 'react';
import './Profile.css';
import ProfilePicture from './ProfilePicture.js'
import ProfileBio from './ProfileBio.js'
import Timeline from './Timeline.js'

class Profile extends Component {

  constructor(props) {
    super(props);
    var isOwner;
    this.state = {
      error: null,
      isLoaded: false,
      isOwner: false
    };
  }

  componentDidMount() {
    if (this.props.userId == localStorage.getItem("userId")) {
      this.setState({
        isOwner: true
      })
    } else {
      this.setState({
        isOwner: false
      })
    }
    fetch(`http://localhost:3000/users/${this.props.userId}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            user: result.data.attributes,
            questions: result.included
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, user, questions, isOwner } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container flex-center flex-column text-center">
          <ProfilePicture />
          <ProfileBio user={user} isOwner={isOwner} />
          <Timeline questions={questions} />
        </div>
      );
    }
  }
}

export default Profile;
