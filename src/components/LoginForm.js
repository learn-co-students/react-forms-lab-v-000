import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      onSubmit: true,
      username: '',
      password: ''
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

  addPropValue = event => {
    event.preventDefault()
    if (document.getElementById('test-username').value !== '' && document.getElementById('test-password').value !== '') {
      console.log(document.getElementById('test-username').value, document.getElementById('test-password').value)
    }
  }
  render() {
    return (
      <form onSubmit={this.addPropValue}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
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
