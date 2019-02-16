import React, { Component } from "react";

export default class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChanges = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={event => event.preventDefault()}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={event => this.handleInputChanges(event)}
              value={this.state.username}
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
              onChange={event => this.handleInputChanges(event)}
              value={this.state.password}
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
