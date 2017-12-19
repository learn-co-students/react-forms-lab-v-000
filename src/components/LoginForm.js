import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { username, password } = this.state;

    if (!username || !password) return;

    onSubmit({ username, password });
  };

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="test-username">Username</label>
          <input
            name="username"
            onChange={this.handleInputChange}
            value={username}
            id="test-username"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="test-password">Password</label>
          <input
            name="password"
            onChange={this.handleInputChange}
            value={password}
            id="test-password"
            type="password"
          />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginForm;
