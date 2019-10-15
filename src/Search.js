import React, { Component } from 'react';
import SearchBar from './components/SearchBar.js';
import SearchResult from './components/SearchResult.js';

class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: [
      ]
    }
  }

  updateQuery(q){
    fetch(`http://localhost:3000/users?q=${q}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            users: result
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        }
      )
  }

  searchResults(){
    let results = []
    this.state.users.forEach(function(user, index){
      results.push(<SearchResult user={user} key={index} />)
    });
    return results
  }

  render() {
    console.log('render called');
    return (
      <div className="Search">
        <h3>Search</h3>
        <SearchBar updateQuery={(q) => this.updateQuery(q)} />
        {this.searchResults()}
      </div>
    );
  }
}

export default Search;
