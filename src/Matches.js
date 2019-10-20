import React, { Component } from 'react';
import Match from './components/Match.js'

class Matches extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.getMatches()
  }

  getMatches(){
    fetch(`http://localhost:3000/matches`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.included)
          this.setState({
            isLoaded: true,
            matches: result.data,
            includes: result.included
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

  deleteMatch(matchId){
    var that = this
    fetch(`http://localhost:3000/matches/${matchId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          let matches = this.state.matches.map(function(match){
            if (matchId != match.id) {
              return match
            }
          }).filter(function (el) {
            return el != null;
          });
          this.setState({
            matches: matches
          })
          // should flash message here that you matched
          // this.getNewUser()
          // add code to remove this one from the states matches
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        }
      )
  }

  createMatches(){
    let matches = this.state.matches
    // let currentUserId = localStorage.getItem("userId")
    let currentUserId = localStorage.getItem("userId")
    let returnedArray = []
    var that = this
    matches.forEach(function(match, index){
      let relationships = match.relationships
      let otherUser = Object.values(relationships).map(function(relationship){
        if (currentUserId != relationship.data.id){
          return relationship.data
        }
      }).filter(function (el) {
        return el != null;
      })[0];
      let user = that.getIncluded(otherUser)
      returnedArray.push(<Match match={user} key={index} matchId={match.id} deleteMatch={(matchId) => that.deleteMatch(matchId)} />)
    })

    return returnedArray
  }

  getIncluded(user){
    let included;
    this.state.includes.forEach(function(include){
      if (include.id == user.id) {
        included = include
      }
    })
    return included
  }

  render() {
    const { error, isLoaded, matches } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Matches">
          {this.createMatches()}
        </div>
      );
    }
  }
}

export default Matches;
