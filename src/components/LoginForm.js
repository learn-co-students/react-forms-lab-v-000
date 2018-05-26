import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  addUserName = (event) => {
    this.setState({
      username: event.target.value,
    })
  }

  addPassword = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  loginSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit
  }

  render() {
    return (
      <form onSubmit={this.loginSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" 
                   type="text" 
                   value = {this.state.username}
                   onChange={this.addUserName}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" 
                   type="password" 
                   value = {this.state.password}
                   onChange={this.addPassword}
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
