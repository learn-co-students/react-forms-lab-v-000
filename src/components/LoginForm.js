import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

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

    if (this.state.usernameValue != '' && this.state.passwordValue != '') {
      this.props.onSubmit;
    }

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.usernameValue} onChange={this.handleUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.passwordValue} onChange={this.handlePasswordChange}/>
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
