import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input 
            id="test-username" 
            type="text" 
            value={this.state.username}
            onChange={this.handleUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="test-password" 
            type="password" 
            value={this.state.password}
            onChange={this.handlePasswordChange}/>
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
