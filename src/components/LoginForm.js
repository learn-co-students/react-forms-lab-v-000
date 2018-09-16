import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  handleUnChange = e => {
    if (e.target.value) {
      this.setState({
        username: e.target.value
      });
    }
  };

  handlePwChange = e => {
    if (e.target.value) {
      this.setState({
        password: e.target.value
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(!!this.state.password, !!this.state.username);
    if (this.state.password === '' && !!this.state.username) {
      this.props.onSubmit(e);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleUnChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handlePwChange}
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
