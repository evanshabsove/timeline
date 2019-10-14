import React, { Component } from 'react';
import './OnBoard.css';
import Question from './components/Question.js'

const Questions = [
  "First Question",
  "Second Question",
  "Third Question",
  "Fourth Question",
  "Fifth Question",
  "Sixth Question",
  "Seventh Question"
]

class OnBoard extends Component {

  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.usedQuestions = [];
    this.questions = {};
  }

  handleSubmit(event) {
    console.log(this.questions);
  }

  checkIfAlreadyAsked(question){
  }

  giveNotUsedQuestion(previousQuestion = null){
    var that = this
    let notAskedQuestions = Questions.filter(function(obj) { return Object.keys(that.questions).indexOf(obj) == -1; });
    let question = notAskedQuestions[Math.floor(Math.random() * notAskedQuestions.length)]

    if (this.questions[previousQuestion] != null) {
      Object.defineProperty(this.questions, question,
        Object.getOwnPropertyDescriptor(this.questions, previousQuestion));
      delete this.questions[previousQuestion];
    // Catch first load
    } else if (previousQuestion == null) {
      this.questions[question] = {}
    }
    return question
  }

  getNewQuestion(question){
    if (question != null) {
      let newQuestion = this.giveNotUsedQuestion(question)
      // let index = this.usedQuestions.indexOf(question);
      // if (index > -1) {
      //   this.usedQuestions.splice(index, 1);
      // }
      return newQuestion
    }
  }

  updateAnswers(answer, question){
    if (this.questions[question] == null) {
      this.questions[question] = {}
    }
    this.questions[question]["answer"] = answer
  }

  updateDate(date, question) {
    if (this.questions[question] == null) {
      this.questions[question] = {}
    }
    this.questions[question]["date"] = date
  }

  createQuestions(){
    let questions = []
    // Outer loop to create parent
    for (let i = 0; i < 3; i++) {
      questions.push(<Question question={this.giveNotUsedQuestion()} getNewQuestion={(question) => this.getNewQuestion(question)} updateAnswers={(answer, questionNumber) => this.updateAnswers(answer, questionNumber)} questionNumber={i} key={i} updateDate={(date, questionNumber) => this.updateDate(date, questionNumber)} />)
    }
    return questions
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container flex-center flex-column">
        {this.createQuestions()}
                <button type="button" onClick={() => this.handleSubmit()}>Submit Answers</button>
      </form>
    );
  }
}

export default OnBoard;
