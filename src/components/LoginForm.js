import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: " ", 
      password: " "
    };
  }

   handlesLogInForm= (event) => {
    this.setState({
      username: event.target.value,
      password: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handlesLogInForm} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlesLogInForm} />
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
