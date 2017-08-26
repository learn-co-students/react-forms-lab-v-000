import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      username: ''
    };
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  canBeSubmitted = () => {
    const { username, password } = this.state;
    return (
          username.length > 0 &&
          password.length > 0
        )
  }

  handleSubmit = event => {
    if (!this.canBeSubmitted()) {
      event.preventDefault();
      return;
    }
    this.props.onSubmit();
    const { username, password } = this.state;
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <button type="submit" disabled={!isEnabled}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
