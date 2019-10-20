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
            matches: result.included
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

  createMatches(){
    let matches = this.state.matches
    let returnedArray = []
    matches.forEach(function(match, index){
      returnedArray.push(<Match match={match} key={index} />)
    })

    return returnedArray
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
