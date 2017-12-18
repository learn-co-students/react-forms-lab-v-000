import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      usernameValue: '',
      passwordValue:''
    };
  }

  handleUsernameValueChange = (event) => {
    this.setState({
      ...this.state,
      usernameValue: event.target.value
    })
  }

  handlePasswordValueChange = (event) => {
    this.setState({
      ...this.state,
      passwordValue: event.target.value
    })
  }

  handleSubmission = (event) => {
    event.preventDefault();
    return this.props.onSubmit
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.handleUsernameValueChange} value={this.state.usernameValue} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.handlePasswordValueChange} value={this.state.passwordValue} />
          </label>
        </div>
        <div>
          <button onClick={this.handleSubmission} type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
