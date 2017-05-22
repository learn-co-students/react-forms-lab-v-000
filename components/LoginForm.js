import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.passwordChange = this.passwordChange.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.formHandler = this.formHandler.bind(this);

    this.state = {
      usernameValue: '',
      passwordValue: '',
    };
  };

  usernameChange(event) {
    this.setState({
      usernameValue: event.target.value,
    })
  };

  passwordChange(event) {
    this.setState({
      passwordValue: event.target.value,
    })
  };

  formHandler(event) {
    event.preventDefault();
    if (this.state.usernameValue != '' && this.state.passwordValue != '') {
      this.props.onSubmit.call(this);
    }
  }

  render() {
    return (
      <form onSubmit={this.formHandler}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.usernameValue} onChange={this.usernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.usernameValue} onChange={this.passwordChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
