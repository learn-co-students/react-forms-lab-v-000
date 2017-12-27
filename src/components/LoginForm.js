import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  inputUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  inputPassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  formSubmit = event => {
    event.preventDefault();
    let { username, password } = this.state;
    if (!username || !password) { return };
  }


  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.inputUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.inputPassword} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
