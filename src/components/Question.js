import React, { Component } from 'react';
import './Question.css';
import {
	withRouter
} from 'react-router-dom';

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
      question: this.props.question,
      answer: ""
    }

		this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
		this.handleSubmitQuestion = this.handleSubmitQuestion.bind(this);
		this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
  }

  handleChangeQuestion() {
		this.setState({ question: "get question"})
  }

  handleChangeAnswer() {
    this.setState({ answer: event.target.value});
  }

  handleSubmitQuestion() {
		alert('the answer is: ' + this.state.answer);
  }

  getQuestion(stateQuestion){
    let currentQuestion = this.state[stateQuestion]
    let question = Questions[Math.floor(Math.random() * Questions.length)]
    if (currentQuestion === question || this.checkIfAlreadyAsked(question)) {
      while (currentQuestion === question || this.checkIfAlreadyAsked(question)) {
        question = Questions[Math.floor(Math.random() * Questions.length)]
      }
      return question
    } else {
      return question
    }
  }

  render() {
    return (
      <div className="first-question">
        <h1>{this.state.question}</h1>
        <button type="button" onClick={this.handleChangeQuestion}>Change Question</button>
        <textarea value={this.state.answer} onChange={this.handleChangeAnswer} />
        <input type="date" value={this.state.date} />
        <button type="button" onClick={this.handleSubmitQuestion}>Submit Answer</button>
      </div>
    );
  }
}

export default withRouter(Question);
