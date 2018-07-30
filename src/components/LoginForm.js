import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      nameValue: '',
      pwdValue: ''
    };
  }

  handleNameChange = event => {
    this.setState({
      nameValue: event.target.value
    })
  }

  handlePwdChange = event => {
    this.setState({
      pwdValue: event.target.value
    })
  }

  handleSubmit = event => {
    if (this.state.nameValue !== '' && this.state.pwdValue !== '') {
      this.props.onSubmit()
    }
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.nameValue} onChange={this.handleNameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.pwdValue} onChange={this.handlePwdChange} />
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
