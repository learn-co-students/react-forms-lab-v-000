import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = event => {
    if (this.state.username.length >=1 && this.state.password.length >=1) {
      event.preventDefault()
    } else {
      event.preventDefault()
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={event => this.setState({username: event.target.value})}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password"
              name="password" 
              type="password" 
              value={this.state.password}
              onChange={event => this.setState({password: event.target.value})}
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
