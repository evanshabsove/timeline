import React, { Component } from 'react';
import './Match.css';

class Match extends Component {

  render() {
    const { match, matchId } = this.props;
    const full_name = `${match.attributes.given_name} ${match.attributes.family_name}`
    return (
      <div>
        <h3>{match.attributes.given_name}</h3>
        <button type="button" onClick={() => this.props.deleteMatch(matchId)}>Delete Match</button>
      </div>
    );
  }
}

export default Match;
