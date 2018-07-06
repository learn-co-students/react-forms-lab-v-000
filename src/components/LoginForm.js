import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  changeUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  changePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  userLogin = e => {
    e.preventDefault()
    const username = this.state.username
    const pass = this.state.password
    debugger;
    if (username !== "" && pass !== ""){
      this.props.onSubmit(username, pass)
    }
  }

  render() {
    return (
      <form onSubmit={this.userLogin}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.changeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.changePassword}/>
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
