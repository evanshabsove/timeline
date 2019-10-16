import React, { Component } from 'react';
import './SearchResult.css';
import { Link } from 'react-router-dom'

class SearchResult extends Component {

  render() {
    const { user } = this.props
    const full_name = `${user.given_name} ${user.family_name}`;
    return (
      <div>
        <Link to={`/users/${user.id}`}>{full_name}</Link>
      </div>
    );
  }
}

export default SearchResult;
