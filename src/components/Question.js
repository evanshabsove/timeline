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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeQuestion(number) {
    console.log(number)
    switch (number) {
      case "first":
        this.setState({ firstQuestion: this.getQuestion()})
        break;
      case "second":
        this.setState({ secondQuestion: this.getQuestion()})
        break;
      case "third":
        this.setState({ thirdQuestion: this.getQuestion()})
        break;
    }
  }

  handleChangeAnswer(number, event) {
    switch (number) {
      case "first":
        this.setState({ firstAnswer: event.target.value});
        break;
      case "second":
        this.setState({ secondAnswer: event.target.value});
        break;
      case "third":
        this.setState({ thirdAnswer: event.target.value});
        break;
    }
  }

  handleSubmit(event) {
    alert('the answer is: ' + this.state.firstAnswer);
    event.preventDefault();
  }

  handleSubmitQuestion() {

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
      <form onSubmit={this.handleSubmit} className="container flex-center flex-column">
        <div className="first-question">
          <h1>{this.state.firstQuestion}</h1>
          <button type="button" onClick={(e) => this.handleChangeQuestion("first")}>Change Question</button>
          <textarea value={this.state.firstAnswer} onChange={(e) => this.handleChangeAnswer("first", e)} />
          <button type="button" onClick={(e) => this.handleSubmitQuestion("first")}>Submit Answer</button>
        </div>
        <div className="second-question">
          <h1>{this.state.secondQuestion}</h1>
          <button type="button" onClick={(e) => this.handleChangeQuestion("second")}>Change Question</button>
          <textarea value={this.state.secondAnswer} onChange={(e) => this.handleChangeAnswer("second", e)} />
          <button type="button" onClick={(e) => this.handleSubmitQuestion("second")}>Submit Answer</button>
        </div>
        <div className="third-question">
          <h1>{this.state.thirdQuestion}</h1>
          <button type="button" onClick={(e) => this.handleChangeQuestion("third")}>Change Question</button>
          <textarea value={this.state.thirdAnswer} onChange={(e) => this.handleChangeAnswer("third", e)} />
          <button type="button" onClick={(e) => this.handleSubmitQuestion("third")}>Submit Answer</button>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Question;
