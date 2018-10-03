import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  updateState = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = (event) => {
    event.preventDefault()

    if (this.state.username && this.state.password){
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleLogin }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={ this.state.username } onChange={ this.updateState }/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={ this.state.password } onChange={ this.updateState }/>
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
