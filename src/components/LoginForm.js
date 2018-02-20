import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  usernameHandleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  passwordHandleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username !== '' && this.state.password !== ''){
      this.props.onSubmit();
    } else {
      alert("Please add a username and password!");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.value} onChange={this.usernameHandleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.value} onChange={this.passwordHandleChange}/>
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
