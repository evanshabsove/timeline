import React, { Component } from 'react';
import Question from './components/Question.js'
import { Redirect } from 'react-router-dom';

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
    this.questions = {};

    this.state = {
      redirect: false
    }
  }

  handleSubmit(event) {
    let obj = {
      user: {
        questions_attributes: Object.values(this.questions)
      }
    }
    console.log(obj)
    event.preventDefault()
    fetch(`http://localhost:3000/users/${localStorage.getItem('userId')}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(obj)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        if (data.error != null) {
          // alert("Email or Password is incorrect.")
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error
        } else {
          this.setState({redirect: true})
          // localStorage.setItem("token", data.auth_token)
          // localStorage.setItem("user_id", data.user.id)
          // this.setState({redirect: true})
          // dispatch(loginUser(data.user))
        }
      })
  }

  checkIfAlreadyAsked(question){
  }

  giveNotUsedQuestion(previousQuestion = null){
    var that = this
    let notAskedQuestions = Questions.filter(function(obj) { return Object.keys(that.questions).indexOf(obj) === -1; });
    let question = notAskedQuestions[Math.floor(Math.random() * notAskedQuestions.length)]

    console.log("what was I doing?")
    if (this.questions[previousQuestion] != null) {
      Object.defineProperty(this.questions, question,
        Object.getOwnPropertyDescriptor(this.questions, previousQuestion));
      delete this.questions[previousQuestion];
      this.questions[question]["question"] = question
    // Catch first load
    } else if (previousQuestion == null) {
      this.questions[question] = {}
      this.questions[question]["question"] = question
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

  createQuestionObject(){
    var that = this;
    if (this.props.questions == null) {
      for (let i = 0; i < 3; i++) {
        let question = this.giveNotUsedQuestion()
        // this could be the dumbest line of code I have ever written
        this.questions[question]["question"] = question
      }
    } else {
      this.props.questions.forEach(function(question){
        let attributes = question.attributes
        that.questions[attributes.question] = {
          "question": attributes.question,
          "answer": attributes.answer,
          "date": attributes.date,
          "id": question.id
        }
      })
    }
  }

  createQuestions(){
    this.createQuestionObject()
    let returnedArray = []
    let questions = Object.values(this.questions)
    // Outer loop to create parent
    var that = this;
    questions.forEach(function(question, index){
      returnedArray.push(<Question question={question} getNewQuestion={(question) => that.getNewQuestion(question)} updateAnswers={(answer, questionNumber) => that.updateAnswers(answer, questionNumber)} questionNumber={index} key={index} updateDate={(date, questionNumber) => that.updateDate(date, questionNumber)} />)
    })
    // for (let i = 0; i < 3; i++) {
    //   questions.push(<Question question={this.giveNotUsedQuestion()} getNewQuestion={(question) => this.getNewQuestion(question)} updateAnswers={(answer, questionNumber) => this.updateAnswers(answer, questionNumber)} questionNumber={i} key={i} updateDate={(date, questionNumber) => this.updateDate(date, questionNumber)} />)
    // }
    return returnedArray
  }

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to={`/users/${localStorage.getItem("userId")}`} />;
     }
    return (
      <form onSubmit={this.handleSubmit} className="container flex-center flex-column">
        {this.createQuestions()}
                <button type="button" onClick={(event) => this.handleSubmit(event)}>Submit Answers</button>
      </form>
    );
  }
}

export default OnBoard;
