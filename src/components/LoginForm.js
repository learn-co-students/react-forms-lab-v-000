import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      pass: '',
    };
  }

  handleChange = event => {
    const {name, value} = event.target; //creates new variables from form params

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const {username, pass} = this.state;

    if (!username || !pass) {
      return;
    }

    this.props.onSubmit({username, pass});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="pass" value={this.state.pass} onChange={this.handleChange} />
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
}

export default LoginForm;
