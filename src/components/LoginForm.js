import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUserInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitData = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.onSubmit(this.state.username, this.state.password);
    }
  }

  render() {
    return (
      <form onSubmit={event => {this.submitData(event)}}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUserInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleUserInput} />
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
