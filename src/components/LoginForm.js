import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.username.length && this.state.password.length) {
      this.props.onSubmit(this.state)
    } else {
      return;
    }
  }

  handleChange = event => {
    // debugger;
    if (event.target.id === "test-username") {
      this.setState({
        username: event.target.value
      })
    } else {
      this.setState({
        password: event.target.value
      })
    }
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
          </label>
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleChange} name="username"/>
        </div>
        <div>
          <label>
            Password
          </label>
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChange} name="password"/>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
