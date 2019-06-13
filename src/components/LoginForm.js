import React from "react";


class LoginForm extends React.Component {

  // this function will save the state of username and password as the user inputs the changes. If the username and password are black then the form will not use the callback function.  The form will prevent the default action of the form.

  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) 
    return
    this.props.handleLogin(this.state)
  };



  render() {
    return (

      <form onSubmit={this.handleSubmit}>

        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text"
            onChange={this.handleChange}        
            />
          </label>
        </div>

        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password"
            onChange={this.handleChange} 
            />
          </label>
        </div>

        <div>
          <button 
          type="submit">
            Log in
          </button>
        </div>

      </form>
    );
  };
};

export default LoginForm;
