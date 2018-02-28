import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let val = event.target.value;

    if (name === 'username') {
      this.setState({
        username: val,
      })
    } else {
      this.setState({
        password: val,
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.onSubmit();
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button
            type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
