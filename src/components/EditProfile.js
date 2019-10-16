import React, { Component } from 'react';
import './EditProfile.css';

class EditProfile extends Component {

  constructor(props){
    super(props)
    this.state = {
      given_name: this.props.user.given_name,
      family_name: this.props.user.family_name,
      email: this.props.user.email
    }

    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  handleChange(){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input
          name='email'
          placeholder='Email'
          value={this.state.email}
          onChange={() => this.handleChange()}
          /><br/>
        <label>First Name</label>
        <input
          type='text'
          name='given_name'
          placeholder='First Name'
          value={this.state.given_name}
          onChange={() => this.handleChange()}
          /><br/>

        <label>Last Name</label>
        <input
          type='text'
          name='family_name'
          placeholder='Last Name'
          value={this.state.family_name}
          onChange={() => this.handleChange()}
          /><br/>
      </form>
    );
  }
}

export default EditProfile;
