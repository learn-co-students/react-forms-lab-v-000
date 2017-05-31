import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
  }
  submitHandler(e) {
    e.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.onSubmit()
    } else {
      alert("Enter username and password.")
      return
    }
  }
  usernameHandler(e) {
    this.setState({
      username: e.target.value,
    })
  }

  passwordHandler(e) {
    this.setState({
      password: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="test-username" value={this.state.username} type="text" onChange={this.usernameHandler}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.password} type="password" onChange={this.passwordHandler}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
