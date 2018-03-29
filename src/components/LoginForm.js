import React from "react";
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputUsername = (event) => {
    this.setState({username: event.target.value})
  }

  handleInputPassword = (event) => {
    this.setState({password: event.target.value})
  }

  checkCredentials = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.onSubmit
    }
  }

  render() {
    return (
      <form onSubmit={this.checkCredentials}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputUsername}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputPassword}
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
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm;
