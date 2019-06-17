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
    switch (number) {
      case "first":
        this.setState({ firstQuestion: this.getQuestion("firstQuestion")})
        break;
      case "second":
        this.setState({ secondQuestion: this.getQuestion("secondQuestion")})
        break;
      case "third":
        this.setState({ thirdQuestion: this.getQuestion("thirdQuestion")})
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
    this.props.history.push("/profile")
  }

  handleSubmitQuestion(number) {
    switch (number) {
      case "first":
        this.setState({ secondQuestion: this.getQuestion("secondQuestion")});
        break;
      case "second":
        this.setState({ thirdQuestion: this.getQuestion("thirdQuestion")});
        break;
    }
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

  checkIfAlreadyAsked(currentQuestion){
    let questions = [
      this.state.firstQuestion,
      this.state.secondQuestion,
      this.state.thirdQuestion,
    ]
    console.log(questions.includes(currentQuestion))
    return questions.includes(currentQuestion)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container flex-center flex-column">
        <div className="first-question">
          <h1>{this.state.firstQuestion}</h1>
          <button type="button" onClick={(e) => this.handleChangeQuestion("first")}>Change Question</button>
          <textarea value={this.state.firstAnswer} onChange={(e) => this.handleChangeAnswer("first", e)} />
          <input type="date" value={this.state.firstDate} />
          <button type="button" onClick={(e) => this.handleSubmitQuestion("first")}>Submit Answer</button>
        </div>
        <div className="second-question">
          <h1>{this.state.secondQuestion}</h1>
          <button type="button" onClick={(e) => this.handleChangeQuestion("second")}>Change Question</button>
          <textarea value={this.state.secondAnswer} onChange={(e) => this.handleChangeAnswer("second", e)} />
          <input type="date" value={this.state.secondDate} />
          <button type="button" onClick={(e) => this.handleSubmitQuestion("second")}>Submit Answer</button>
        </div>
        <div className="third-question">
          <h1>{this.state.thirdQuestion}</h1>
          <button type="button" onClick={(e) => this.handleChangeQuestion("third")}>Change Question</button>
          <textarea value={this.state.thirdAnswer} onChange={(e) => this.handleChangeAnswer("third", e)} />
          <input type="date" value={this.state.thirdDate} />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </div>
      </form>
    );
  }
}

export default withRouter(Question);
