import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  setUsername = (event) => {
    this.setState({
      username: event.target.value,
    })
  }

  setPassword = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    debugger
    var username = this.state.username;
    var password = this.state.password;
    // Why do these work in the browser but don't pass the tests?
    // var username = event.target[0].value
    // var password = event.target[1].value
    // var username = $('#test-username').value
    // var password = $('#test-password').value
    if (username === "" || password === "") {
      return;
    } 
    this.props.onSubmit({username, password})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.setUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.setPassword}/>
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
