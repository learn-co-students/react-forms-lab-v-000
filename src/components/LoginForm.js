import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username_value: '',
      password_value: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault()

    if (this.state.username_value !== '' && this.state.password_value !== '') {
      this.props.onSubmit(this.state.username_value, this.state.password_value)
    } else {
      console.log("Failed login")
    }
  }

  handleUsernameChange = event => {
    this.setState({
      username_value: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password_value: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="test-username" type="text" name="username"
              value={this.state.username_value}
              onChange={this.handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="test-password" type="password" name="password"
              value={this.state.password_value}
              onChange={this.handlePasswordChange}
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
