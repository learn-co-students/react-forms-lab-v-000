import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    if (event.target.name === "username") {
      this.setState({
        username: event.target.value
      })
    } else if (event.target.name === "password") {
      this.setState({
        password: event.target.value
      })
    }

  }

  submitLogin = (event) => {
    event.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    if (username !== '' && password !== ''){
      this.props.onSubmit({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={this.submitLogin}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
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
