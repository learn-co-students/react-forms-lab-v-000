import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password:'',
    };
  }

  handleFields = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
      event.preventDefault()
      this.setState({
        username: "User name can't be blank",
        password: "Password can't be blank"
    })
  }

  render() {
    return (
      <form onSubmit={event => this.onSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleFields(event)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handleFields(event)} value={this.state.password}/>
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
