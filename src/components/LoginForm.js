import React from 'react';
//import PropTypes from 'prop-types'

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value})
  }
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value})
  }
  handleformSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleformSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name="password" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="username" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
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
