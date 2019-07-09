import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: ''
    };
  }

  handleChange = event => {
    // event.preventDefault();
    this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()

  if (!this.state.username || !this.state.password) return

  this.props.handleLogin(this.state)
}



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username"
             name="userName"
             type="text"
             value={this.state.userName}
             onChange={this.handleChange}
             autoComplete="user-name"
               />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            autoComplete="current-password"/>
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
