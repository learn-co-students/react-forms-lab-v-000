import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const {username, password} = this.state;

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({username, password})
  }

  handleInput = e => {
    const targetType = e.target.type
    const stateVariable = targetType === 'text' ? 'username' : 'password'

    this.setState({
      [stateVariable]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={this.handleInput} id="test-username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={this.handleInput} id="test-password" type="password" />
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
