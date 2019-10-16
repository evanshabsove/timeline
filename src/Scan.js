import React, { Component } from 'react';
import ProfilePicture from './components/ProfilePicture.js'
import ProfileBio from './components/ProfileBio.js'
import Timeline from './components/Timeline.js'

class Scan extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/users/1`)
      .then(res => res.json())
      .then(
        (result) => {
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
    const { error, isLoaded, user, questions } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div className="Scan container flex-center flex-column text-center">
        <ProfilePicture />
        <ProfileBio user={user} />
        <Timeline questions={questions} />
      </div>
    );
    }
  }
}

export default Scan;
