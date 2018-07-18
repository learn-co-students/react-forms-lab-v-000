import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  changeUser = event => {
    this.setState({
      username: event.target.value
    })
  }

  changePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  validateInput = (e) => {
    e.preventDefault();
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.onSubmit();
    }
  }

  render() {
    return (
      <form onSubmit={this.validateInput}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.changeUser}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.changePassword}/>
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
