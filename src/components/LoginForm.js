import React from "react";

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      username: "",
      password: "",
    };
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  changePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (!username || !password){
      return;
    } else {
      this.props.onSubmit({ username, password });
    }
  }


  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.changeUsername}
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
              onChange={this.changePassword}
            />
          </label>
        </div>

        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
};
