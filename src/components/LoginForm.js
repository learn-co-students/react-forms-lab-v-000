import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleUserName = (e) => this.setState({
    username: e.target.value,
  });

  handlePw = (e) => this.setState({
    password: e.target.value,
  });

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.username.length > 0 && this.state.password.length > 0){
      this.props.onSubmit(this.state);
    }
  }

  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input 
              autoComplete="username"
              id="username" 
              name="username" 
              onChange={this.handleUserName} 
              type="text"
              value={this.state.username} 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              autoComplete="current-password"
              id="password" 
              name="password" 
              onChange={this.handlePw} 
              type="password"
              value={this.state.password}
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
