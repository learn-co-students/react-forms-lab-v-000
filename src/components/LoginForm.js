import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    if (this.state.username && this.state.password) {
      this.props.login
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              value={this.state.username}
              onChange={this.handleUsernameChange}
              id="test-username"
              type="text" 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              value={this.state.password}
              onChange={this.handlePasswordChange}
              id="test-password"
              type="password"
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
