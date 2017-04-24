import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.checkSubmit = this.checkSubmit.bind(this)

    this.state = {
      testUsername: '',
      testPassword: ''
    };
  }

  handleUserChange(event) {
    this.setState({
      testUsername: event.target.value
    })
  }

  handlePasswordChange() {
    this.setState({
      testPassword: event.target.value
    })
  }

  checkSubmit(event) {
    if (this.state.testUsername.length > 0 && this.state.testPassword.length > 0) {
      this.props.onSubmit()
    } else {
      event.preventDefault()
      alert("FAILURE")
    }
  }

  render() {
    return (
      <form onSubmit={this.checkSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" value={this.state.testUsername} onChange={this.handleUserChange} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.testPassword} onChange={this.handlePasswordChange} type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
