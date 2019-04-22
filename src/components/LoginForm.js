import React from "react";

export default class LoginForm extends React.Component {
  constructor() {
    super();
    // basic login initial State
    this.state = {
      username: '',
      password: ''
    };
  }

  // we need to handle the State change with our obj input(s)
  handleChange = e => {
    // as before, we can use a dynamic attr updater:
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // we also require a function to handle form submission:
  handleSubmit = e => {
    e.preventDefault();
    // here, we'll utilize a conditional to check for validation
    if (!this.state.username || !this.state.password) return;
    // handleLogin accesses the component using our submitted data, ie., State change
    this.props.handleLogin(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username"
              name="username"
              type="text"
              onChange={e => this.handleChange(e)}
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
              onChange={e => this.handleChange(e)}
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

