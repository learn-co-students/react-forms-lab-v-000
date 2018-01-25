import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  updateUsername = event => {
    this.setState({
      username: event.target.value,
    });
  }

  updatePassword = event => {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    if(this.state.username != '' && this.state.password != '') {
      return this.props.onSubmit()
    }
    
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.updateUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.updatePassword}/>
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
