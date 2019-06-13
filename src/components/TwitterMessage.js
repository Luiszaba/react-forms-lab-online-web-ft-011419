
import React from "react";

class TwitterMessage extends React.Component {
  // we want to create a javascript file that allows a user to submit a form with a maxChar limit of 140.  This limit is located in App.js.  <TwitterMessage /> maxChars={140}/>  This limit should be readable and update as the user updates the form i.e message = [event.target.value] :[this.state.message]

  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  render() {
    return (

    <div>
        <strong> Your message: </strong> 
        <input 
        type = "text"
        onChange = { event => this.setState({message: event.target.value})}
        value = { this.state.message } 
        /> 
        {this.props.maxChars - this.state.message.length}
      </div>

    );
  }
}

export default TwitterMessage;
