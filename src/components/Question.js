import React, { Component } from 'react';
import './Question.css';
import {
	withRouter
} from 'react-router-dom';

class Question extends Component {

  constructor(props){
    super(props)
    this.state = {
      question: this.props.question.question,
			questionNumber: this.props.questionNumber,
      answer: this.props.question.answer,
			date: this.props.question.date
    }

		this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
		this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
		this.handleChangeDate = this.handleChangeDate.bind(this)
  }

  handleChangeQuestion() {
		let newQuestion = this.props.getNewQuestion(this.state.question)
		this.setState({ question: newQuestion})
  }

  handleChangeAnswer() {
    this.setState({ answer: event.target.value});
		this.props.updateAnswers(event.target.value, this.state.question)
  }

	handleChangeDate() {
		this.props.updateDate(event.target.value, this.state.question)
	}

  render() {
    return (
      <div className="first-question">
        <h1>{this.state.question}</h1>
        <button type="button" onClick={() => this.handleChangeQuestion()}>Change Question</button>
        <textarea value={this.state.answer} onChange={this.handleChangeAnswer} />
        <input type="date" value={this.state.date} onChange={() => this.handleChangeDate()}/>
      </div>
    );
  }
}

export default withRouter(Question);
