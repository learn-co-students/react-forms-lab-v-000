import React from "react";
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  setUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  setPassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  formSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      return;
    }

    this.props.onSubmit({ username, password });
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.setUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.setPassword}/>
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
