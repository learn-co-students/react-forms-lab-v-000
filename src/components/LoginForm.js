import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }
  handleUserChange = e =>{
    this.setState(
      {
          username: e.target.value
      }
    )
  }

  handlePassChange = e =>{
    this.setState(
      {
          password: e.target.value
      }
    )

  }

  handleLogin = event => {
    event.preventDefault();
    (this.state.username.length && this.state.password.length) ? this.props.handleLogin(this.state) : null;
  }
 

  render() {
    return (
      <form onSubmit={event=> this.handleLogin(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" onChange={e => this.handleUserChange(e)} type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" onChange={e => this.handlePassChange(e)} type="password" value={this.state.password} />
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
