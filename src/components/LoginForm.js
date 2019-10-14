import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  stateUpdater = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitter = event => {
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state);
    }
  };

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.stateUpdater}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.stateUpdater}
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

export default LoginForm;
