import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleValueChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      return;
    }
    this.props.onSubmit({ username, password });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input 
              id="test-username" 
              type="text" 
              name="username"
              onChange={this.handleValueChange} 
              value={this.state.username} 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="test-password" 
              type="password" 
              name="password"
              onChange={this.handleValueChange} 
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
