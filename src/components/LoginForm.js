import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleLogin = event => {
      event.preventDefault();
      const { username, password } = this.state;

      if (!username || !password) {
        return;
      }
      this.props.handleLogin({ username, password });
    };

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.value} onChange={this.handleChange}/>
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
