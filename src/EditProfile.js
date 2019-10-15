import React, { Component } from 'react';
import OnBoard from './OnBoard.js'

class EditProfile extends Component {

  constructor(props){
    super(props)
    console.log(this.props)
    this.state = {
      userId: this.props.match.params.userId,
      isLoaded: false
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/users/${this.state.userId}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
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

  render() {
    const { user, questions, isLoaded, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="EditProfile">
          <OnBoard questions={questions} />
        </div>
      );
    }
  }
}

export default EditProfile;
