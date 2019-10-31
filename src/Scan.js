import React, { Component } from 'react';
import ProfilePicture from './components/ProfilePicture.js'
import ProfileBio from './components/ProfileBio.js'
import Timeline from './components/Timeline.js'
import { Redirect } from 'react-router-dom';

class Scan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };

    this.getNewUser = this.getNewUser.bind(this)
  }

  componentDidMount() {
    if (localStorage.getItem('hasQuestions') === "false") {
      this.setState({redirect: true})
    } else {
      this.getNewUser()
    }
  }

  getNewUser(){
    fetch(`http://localhost:3000/scan`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            user: result.data.attributes,
            userId: result.data.id,
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

  matchWithUser(){

    let obj = {
      match: {
        matched_with_user_id: this.state.userId
      }
    }
    fetch(`http://localhost:3000/matches`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(
        (result) => {
          // should flash message here that you matched
          this.getNewUser()
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
    const { error, isLoaded, user, questions, redirect } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (redirect) {
      alert("You need to answer your three questions before viewing this page")
      return <Redirect to='/onboard'/>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div className="Scan container flex-center flex-column text-center">
        <button type="button" onClick={() => this.getNewUser()}>Next User</button>
        <button type="button" onClick={() => this.matchWithUser()}>Match With User</button>
        <ProfilePicture />
        <ProfileBio user={user} />
        <Timeline questions={questions} />
      </div>
    );
    }
  }
}

export default Scan;
