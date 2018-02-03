import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "", 
      password: ""
    };
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({username, password});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="test-username" 
              name="username"
              value={this.state.username} 
              type="text"
              onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="test-password" 
              name="password"
              value={this.state.password} 
              type="password"
              onChange={this.handleInputChange} />
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
