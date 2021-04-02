import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePwdChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleEvent = (event) => {
    event.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.handleLogin( {username: this.state.username, password: this.state.password })
    }

  }

  render() {
    return (
      <form onSubmit={this.handleEvent}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleNameChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePwdChange} value={this.state.password}/>
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
