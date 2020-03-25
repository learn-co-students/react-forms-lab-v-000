import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  handleInputChange = event => {
    this.setState({
      username: event.target.value,
      password: event.target.value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let username = this.state.username
    let password = this.state.password
    if(username !== "" && password !== ""){
      this.props.handleLogin({username, password})
    } 
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
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
