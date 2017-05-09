import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(ev) {
    this.setState({
      username: ev.target.value
    });
  }

  handlePasswordChange(ev) {
    this.setState({
      password: ev.target.value
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const { username, password } = this.state;

    if (username && password) {
      this.props.onSubmit({username, password})
    } else {
      return;
    }
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={(event) => this.handleUsernameChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={(event) => this.handlePasswordChange(event)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
