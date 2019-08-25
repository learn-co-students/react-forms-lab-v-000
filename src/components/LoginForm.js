import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

  }
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
 } 
    
  

  render() {
    return (
      <form onSubmit={this.onSubmit}> 
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={e => this.handleUsernameChange(e)} 
            value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={e => this.handlePasswordChange(e)} 
            value={this.state.password} />
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
