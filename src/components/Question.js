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
      firstQuestion: Questions[0],
      secondQuestion: "",
      thirdQuestion: "",
      firstAnswer: "",
      secondAnswer: "",
      thirdAnswer: ""
    }

    this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeQuestion() {
    this.setState({ firstQuestion: this.getQuestion()})
  }

  handleChangeAnswer(event) {
    this.setState({ firstAnswer: event.target.value});
  }

  handleSubmit(event) {
    alert('the answer is: ' + this.state.firstAnswer);
    event.preventDefault();
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
        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.firstQuestion}</h1>
          <button type="button" onClick={this.handleChangeQuestion}>Change Question</button>
          <textarea value={this.state.firstAnswer} onChange={this.handleChangeAnswer} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Question;
