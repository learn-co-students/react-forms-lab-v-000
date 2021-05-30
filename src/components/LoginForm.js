import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  updateField = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  submitLogin = event => {
    event.preventDefault()

    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.submitLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.updateField} value={this.state.user} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.updateField} value={this.state.pass} />
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
