import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  changeStateHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name)

    this.setState({
      [name]: value
    });
  };

  submitFormHandler = event => {
    event.preventDefault();
    const { username, password } = this.state;

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({ username, password });
  };

  render() {
    return (
      <form onSubmit={this.submitFormHandler}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.changeStateHandler}
            />

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
              onChange={this.changeStateHandler}
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
