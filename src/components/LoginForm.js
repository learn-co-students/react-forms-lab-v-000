import React from "react";
import PropTypes from 'prop-types'


class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
      // username: event.target.value,
      // password: event.target.value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({ username, password })
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name="username" value={this.state.username} onChange={this.handleInputChange} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" value={this.state.password} onChange={this.handleInputChange} type="password" />
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
  onSubmit: PropTypes.func,
};

export default LoginForm;
