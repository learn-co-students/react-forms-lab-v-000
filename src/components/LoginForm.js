import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange1 = event => {
    this.setState({
      username: event.target.value
      })
  }

  handleChange2 = event => {
    this.setState({
      password: event.target.value
    })
  }

  checkValues(event) {
    event.preventDefault()
    console.log(this.state.password)
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)}
  }

  render() {
    return (
      <form onSubmit={event => this.checkValues(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleChange1(event)} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handleChange2(event)} id="password" name="password" type="password" value={this.state.password}/>
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
