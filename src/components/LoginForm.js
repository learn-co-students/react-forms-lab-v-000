import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      passwordValue: '',
      usernameValue: ''
    };
  }

  usernameChangeHandler = (e) => {
    this.setState({
      usernameValue: e.target.value
    })
  }

  passwordChangeHandler = (e) => {
    this.setState({
      passwordValue: e.target.value
    })
  }

  handleSubmission = (e) => {
    e.preventDefault();

    const username = this.state.usernameValue
    const password = this.state.passwordValue

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({ username, password });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <div>
          <label>
            Username
            <input 
              id="test-username" 
              type="text" 
              value={this.state.usernameValue}
              onChange={this.usernameChangeHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="test-password" 
              type="password" 
              value={this.state.passwordValue}
              onChange={this.passwordChangeHandler}
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
