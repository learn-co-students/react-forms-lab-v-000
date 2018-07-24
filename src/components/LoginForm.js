import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  loginUsername = (event) => {
    this.setState({
    username: event.target.value
    })
  }

  loginPassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  loginSubmit = (event) => {
    event.preventDefault();
      this.props.onSubmit(["s","s"])
    }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.loginUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.loginPassword}/>
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.loginSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
