import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  // submit handler needs to pass the form data to the onSubmit function passed down via props from App
  handleSubmit = event => {
    event.preventDefault()
    // both fields have to be filled in
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.onSubmit(this.state)
    }
  }

  handleLogin = event => {
    this.setState(
      {username: event.target.value}
    )
  }

  handlePassword = event => {
    this.setState(
      {password: event.target.value}
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleLogin(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handlePassword(event)}/>
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
