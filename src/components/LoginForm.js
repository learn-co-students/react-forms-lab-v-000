import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameValue: '',
      passwordValue: ''
    };
  }

  handleUsernameChange = event => {
    this.setState({
      usernameValue: event.target.value,
    })
  }



  handlePasswordChange = event => {
    this.setState({
      passwordValue: event.target.value,
    })
  }

  handleSubmit = event => {
    if (this.state.passwordValue === '' || this.state.usernameValue === '') {
      event.preventDefault();
    } else {
      this.props.onSubmit()
    }
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
              value={this.state.usernameValue}
              onChange={this.handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.passwordValue}
              onChange={this.handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <button
            type="submit">
            Log in
          </button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
}


export default LoginForm;
