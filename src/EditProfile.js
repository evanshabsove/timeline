import React, { Component } from 'react';
import OnBoard from './OnBoard.js'
import EditProfileDetails from './components/EditProfile.js'

class EditProfile extends Component {

  constructor(props){
    super(props)
    this.state = {
      userId: this.props.match.params.userId,
      isLoaded: false
    }
    this.user_data = {
      user: {
      }
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/users/${this.state.userId}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            user: result.data.attributes,
            questions: result.included
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  getNewProfileDetails(user){
    this.user_data["user"] = user
  }

  handleSubmit(event){
    event.preventDefault()
    fetch(`http://localhost:3000/users/${localStorage.getItem('userId')}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(this.user_data)
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
          // this.setState({redirect: true})
          // localStorage.setItem("token", data.auth_token)
          // localStorage.setItem("user_id", data.user.id)
          // this.setState({redirect: true})
          // dispatch(loginUser(data.user))
        }
      })
  }

  render() {
    const { questions, isLoaded, error, user } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="EditProfile">
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <EditProfileDetails user={user} getNewProfileDetails={(user) => this.getNewProfileDetails(user)} />
            <input type='submit'/>
          </form>
          <OnBoard questions={questions} />
        </div>
      );
    }
  }
}

export default EditProfile;
