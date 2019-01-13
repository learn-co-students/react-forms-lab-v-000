import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handlePasswordChange = event =>{
    this.setState({
      password: event.target.value
    })
  }

  handleUsernameChange = event =>{
    this.setState({
      username: event.target.value
    })
}

handleSubmit = event =>{
  event.preventDefault();
}

  render() {
    return (
      <form onSubmit= {this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
            onChange={event => this.handleUsernameChange(event)}
            value = {this.state.message}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handlePasswordChange(event)}
            value = {this.state.message}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
