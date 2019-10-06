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
    this.usedQuestions = []
  }

  handleSubmit(event) {
    alert('the answer is: ');
    event.preventDefault();
  }

  checkIfAlreadyAsked(question){
  }

  giveNotUsedQuestion(){
    var that = this
    let notAskedQuestions = Questions.filter(function(obj) { return that.usedQuestions.indexOf(obj) == -1; });
    let question = notAskedQuestions[Math.floor(Math.random() * notAskedQuestions.length)]
    this.usedQuestions.push(question)
    return question
    // if (this.checkIfAlreadyAsked(question)) {
    //   while (currentQuestion === question || this.checkIfAlreadyAsked(question)) {
    //     question = Questions[Math.floor(Math.random() * Questions.length)]
    //   }
    //   return question
    // } else {
    //   return question
    // }
  }

  getNewQuestion(question){
    console.log(question)
    if (question != null) {
      let newQuestion = this.giveNotUsedQuestion()
      let index = this.usedQuestions.indexOf(question);
      if (index > -1) {
        this.usedQuestions.splice(index, 1);
      }
      return newQuestion
    }
  }

  createQuestions(){
    let questions = []
    // Outer loop to create parent
    for (let i = 0; i < 3; i++) {
      questions.push(<Question question={this.giveNotUsedQuestion()} getNewQuestion={(question) => this.getNewQuestion(question)} />)
    }
    return questions
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container flex-center flex-column">
        {this.createQuestions()}
        // <Question question={this.giveNotUsedQuestion()} />
      </form>
    );
  }
}

export default OnBoard;
