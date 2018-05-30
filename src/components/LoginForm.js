import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      usernameValue: '',
      passwordValue: ''
    };
  }

  changeUsername = event => {
    this.setState({
      usernameValue: event.target.value
    })

  }

  changePassword = event => {
    this.setState({
      passwordValue: event.target.value
    })

  }

  handleSubmit = event => {
    if (this.state.usernameValue === '') {
      event.preventDefault()
    } else if (this.state.passwordValue === '') {
      event.preventDefault()
    } else {
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.value} onChange={this.changeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.value} onChange={this.changePassword}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
