import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
    this.setValue = this.setUsername.bind(this);
    this.setValue = this.setPassword.bind(this);
  }

  setUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  setPassword = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  submitChange = (event) => {
    event.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.onSubmit
    }
  }


  render() {
    return (
      <form onSubmit={this.submitChange}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.setUsername}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.setPassword}
            />
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
