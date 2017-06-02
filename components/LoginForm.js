import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange(field, event) {
    const target = event.target;
    this.setState({
      [field]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    if (username && password) this.props.onSubmit(event);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              name="username"
              type="text"
              value={this.state.username}
              // onChange={this.handleChange} />
              onChange={this.handleChange.bind(this, 'username')} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              name="password"
              type="password"
              value={this.state.password}
              // onChange={this.handleChange} />
              onChange={this.handleChange.bind(this, 'password')} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
