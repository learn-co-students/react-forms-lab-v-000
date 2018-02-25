import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  formSubmit = (changeEvent) => {
    changeEvent.preventDefault()
    if (this.state.username && this.state.password) {
      console.log('worked');
      this.props.onSubmit({username: this.state.username, password: this.state.password});
    } else {
      console.log('Please enter BOTH a username AND a password.')
    }
  }

  updateUsernameField = (changeEvent) => {
    this.setState({
      username: changeEvent.target.value
    });
  }

  updatePasswordField = (changeEvent) => {
    this.setState({
      password: changeEvent.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.updateUsernameField} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.updatePasswordField} value={this.state.password}/>
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
