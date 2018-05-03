import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.handleChange}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
