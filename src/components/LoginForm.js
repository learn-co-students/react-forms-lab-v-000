import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value, 
    }, () => console.log(this.state.username))
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value, 
    }, () => console.log(this.state.password))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input 
              id="test-username"
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={this.handleUsernameChange}  
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="test-password" 
              type="password" 
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <button 
            type="submit"
            onClick={this.handleSubmit}
          >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
