import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleUserType = this.handleUserType.bind(this);
    this.handlePasswordType = this.handlePasswordType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserType(event) {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordType(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    var { username, password } = this.state;
    if (!username || !password) {
      return;
    }

    this.props.onSubmit({
      username,
      password
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" value={this.state.username} type="text" onChange={this.handleUserType} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"value={this.state.password} type="password" onChange={this.handlePasswordType} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
