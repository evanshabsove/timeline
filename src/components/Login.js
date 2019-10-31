import React, {Component} from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: "",
    password: "",
    redirect: false,
    hasQuestions: false,
    userId: null
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    var that = this
    event.preventDefault()
    fetch("http://localhost:3000/authenticate", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(that.state)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        if (data.error != null) {
          alert("Email or Password is incorrect.")
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error
        } else {
          localStorage.setItem("token", data.auth_token)
          localStorage.setItem("userId", data.user.id)
          localStorage.setItem("hasQuestions", data.has_questions)
          this.setState({hasQuestions: data.has_questions, userId: data.user.id, redirect: true})
          // dispatch(loginUser(data.user))
          // Note this is bad but w/e
          window.location.reload();
        }
      })
    // this.props.userLoginFetch(this.state)
  }

  render() {
    const { redirect, hasQuestions, userId } = this.state;

     if (hasQuestions) {
       return <Redirect to={`users/${userId}`}/>;
     } else if (redirect) {
       return <Redirect to='/onboard'/>;
     }
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <label>Email</label>
        <input
          name='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <input type='submit'/>
      </form>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
// })

// export default connect(null, mapDispatchToProps)(Login);
export default Login;
