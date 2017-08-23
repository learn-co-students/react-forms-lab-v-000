import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      username: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      password: event.target.value,
      username: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password != '' && this.state.username != '') {
      'login successful'
    } else {
      'username and password cannot be blank'
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
