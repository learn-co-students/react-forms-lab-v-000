import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = event => {
    event.preventDefault()
    console.log(`Logging in ${this.state.username} with ${this.state.password}`)
  }

  render() {

    let useHandler = this.handleLogin;
    if (this.state.username && this.state.password) {
      useHandler = this.props.handleLogin;
    }

    return (
      <form onSubmit={useHandler}>
        <div>
          <label>
            Username
            <input onChange={this.handleFormChange} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleFormChange} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form >
    );
  }
}

export default LoginForm;
