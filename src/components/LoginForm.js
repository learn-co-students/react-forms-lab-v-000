import React from "react";
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: "",
      password: ""
    };
  }

  setUserName = event => {
    console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }

  setPassword = event => {
    this.setState({
      password: event.target.value
    })
  }

handleSubmit = (event) => {
  event.preventDefault()
  const username = this.state.username
  const password = this.state.password
  const isNotPresent = !username || !password
  if (isNotPresent) {
    return
  }
  this.props.onSubmit({username, password})
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.setUserName}
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
            value={this.state.password}
            onChange={this.setPassword}
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

LoginForm.propTypes = {
  onSubmit: PropTypes.func
}

export default LoginForm;
