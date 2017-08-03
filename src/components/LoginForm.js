import React from 'react';
import PropTypes from 'prop-types';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    let password = this.state.password
    let username = this.state.username
    if (password === '' || username === ''){
      return
    }
  }


  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <div>
          <label>
            Username {this.state.username}
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password {this.state.password}
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
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
