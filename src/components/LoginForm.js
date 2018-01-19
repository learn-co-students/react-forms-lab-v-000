import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  canSubmit = (e) => {
    e.preventDefault();
    if ( this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.onSubmit();
    }
  }

  render() {
    return (
      <form onSubmit={this.canSubmit}>
        <div>
          <label>
            Username
            <input id="test-username"
                   type="text"
                   value={this.state.username}
                    onChange={this.handleChangeUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"
                   type="password"
                   value={this.state.password}
                   onChange={this.handleChangePassword} />
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
