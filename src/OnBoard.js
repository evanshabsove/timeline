import React, { Component } from 'react';
import './OnBoard.css';
import Question from './components/Question.js'

class OnBoard extends Component {
  render() {
    return (
      <div className="OnBoard container flex-center">
        <Question />
      </div>
    );
  }
}

export default OnBoard;
