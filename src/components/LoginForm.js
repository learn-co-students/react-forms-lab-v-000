import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({

      })
  }

  handleNameChange = (event) => {
    this.setState({
        username: event.target.value
      })
  }

  handlePasswordChange = (event) => {
    this.setState({
        password: event.target.value
      })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username"
                type="text"
                name='username'
                value={this.state.username}
                onChange={this.handleNameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"
                type="password"
                name='password'
                value={this.state.password}
                onChange={this.handlePasswordChange}/>
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
