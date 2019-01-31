import React from "react";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!!this.state.username && !!this.state.password) {
      console.log('fired')
      return this.props.onSubmit(this.state)
    } else {
      console.error("All form fields required")
    }
  }

  handleChange = event => {
    const targetKey = event.target.name
    const targetValue = event.target.value
    const newState = { [targetKey]: targetValue }

    this.setState(newState)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
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
