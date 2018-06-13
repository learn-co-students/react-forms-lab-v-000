import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmission = event => {
    event.preventDefault()
    if (this.state.username === "" || this.state.password === "") {
      return
    } else {
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <div>
          <label>
            Username
            <input id="test-username" name="username" value={this.state.username} onChange={this.handleUsername} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" value={this.state.password} onChange={this.handlePassword} type="password" />
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
