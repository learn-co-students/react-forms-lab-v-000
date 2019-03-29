import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInput = (event) => {
    const newState = this.state
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submitting')
    const name = this.state.username
    const password = this.state.password

    if (name.length > 0 && password.length > 0) {
      this.props.onSubmit({username: name, password: password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleInput} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleInput} value={this.state.password} id="password" name="password" type="password" />
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
