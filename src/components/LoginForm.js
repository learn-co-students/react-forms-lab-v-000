import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: " ",
      password: " "
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  stopSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.stopSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name="username" value={this.state.username} onChange={this.handleUsernameChange} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" value={this.state.password} onChange={this.handlePasswordChange} type="password" />
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
