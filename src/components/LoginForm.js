import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      textValue: '',
      passwordValue: ''
    };
  }

  handleTextChange = event => {
    this.setState({
      textValue: event.target.value,
    })
  }

  handlePasswordChange = event => {
    this.setState({
      passwordValue: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.textValue !== '' && this.state.passwordValue !== '') {
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.textValue}
              onChange={this.handleTextChange}
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
              onChange={this.handlePasswordChange}
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
