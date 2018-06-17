import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="test-username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"
               type="password"
               name="password"
               value={this.state.password}
               onChange={this.handleInputChange}
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
