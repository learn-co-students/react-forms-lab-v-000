import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  updateUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  formCallback = (event) => {
    event.preventDefault();
    var username = this.state.username
    var password = this.state.password
    if (username && password) {
      this.props.onSubmit({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={this.formCallback}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.updateUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.updatePassword}/>
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