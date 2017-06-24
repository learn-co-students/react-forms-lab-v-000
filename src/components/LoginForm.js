import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

    handleInputChange = (event) => {
      var field = event.target.name
      var value = event.target.value
      this.setState({
        field: value,
      });
    }

    handleSubmit = (event) => {
      event.preventDefault()
      if (!this.state.username || !this.state.password) {
        return
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
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
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