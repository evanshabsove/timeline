import React, { Component } from 'react';
import './Question.css';

const Questions = [
  "First Question",
  "Second Question",
  "Third Question",
  "Fourth Question"
]

class Question extends Component {

  constructor(props){
    super(props)
    this.state = {
      value: Questions[0]
    }

    this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
  }

  handleChangeQuestion() {
    this.setState({ value: this.getQuestion()})
  }

  getQuestion(){
    let currentQuestion = this.state.value
    let question = Questions[Math.floor(Math.random() * Questions.length)]
    if (currentQuestion === question) {
      while (currentQuestion === question) {
        question = Questions[Math.floor(Math.random() * Questions.length)]
      }
      return question
    } else {
      return question
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button type="button" onClick={this.handleChangeQuestion}>Change Question</button>
      </div>
    );
  }
}

export default Question;
