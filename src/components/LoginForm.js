import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitForm = event => {
    event.preventDefault()
    if (this.state.username === "" || this.state.password === "") {
      null
    } else {
      this.props.handleLogin(this.state.username, this.state.password)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.submitForm(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={ event => this.changeHandler(event) } value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={ event => this.changeHandler(event) } value={this.state.password}/>
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
