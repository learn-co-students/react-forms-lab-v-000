import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      username: ''
    };
  }

  handlePassChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  handleUserChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit = (e) => {
    if (this.state.username!= "" && this.state.password != "") {
      this.props.onSubmit(this.state.username, this.state.password)
      e.preventDefault();
      }
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleUserChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handlePassChange} />
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
