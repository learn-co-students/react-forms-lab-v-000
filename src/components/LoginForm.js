import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      name: event.target.value,
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name !== "" && this.state.password !== "") {
      return true
    } else {
      return false
    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.name} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChange}/>
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
