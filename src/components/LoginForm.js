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

  handleUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  handlePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const {username, password} = this.state;

      if(!username || !password) {
        return;
      }
      this.props.onSubmit({username, password});

  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label>
            Username
            <input
            id="test-username"
            type="text"
            value={this.state.username}
            onChange={this.handleUsername}
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
            onChange={this.handlePassword}
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
  maxChars: PropTypes.number,
};

LoginForm.defaultProps = {
  maxChars: 140,
};

export default LoginForm;
