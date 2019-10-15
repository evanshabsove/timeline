import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      q: ""
    }
  }

  handleChange(){
    this.setState({q: event.target.value});
    this.props.updateQuery(event.target.value)
  }

  render() {
    return (
      <div>
        <input type="search" value={this.state.q} onChange={() => this.handleChange()} />
      </div>
    );
  }
}

export default SearchBar;
