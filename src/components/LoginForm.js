import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = event => {
   const { name, value } = event.target;

   this.setState({
     [name]: value
   });
 }


handleOnSubmit = event => {
  event.preventDefault();
  const { username, password } = this.state;

  if (!username || !password) {
    return;
  }

  this.props.onSubmit({ username, password });
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
             onChange={this.handleInputChange}
             value={this.state.username}
             name="username"
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            id="test-password"
            type="password"
            onChange={this.handleInputChange}
            value={this.state.password}
            name="password"
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
  onSubmit: PropTypes.func,
};


export default LoginForm;
