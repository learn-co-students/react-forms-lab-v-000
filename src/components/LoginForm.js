import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
            onChange={this.handleUsername}
            id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            onChange={this.handlePassword}
            id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button
          type="submit"
          >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
