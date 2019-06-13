import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  callbackFunction = (event) => {
    event.preventDefault()
    if (this.state.password === ''){
      null
    } else if (this.state.username === ''){
      null
    } else {
      this.props.handleLogin(this.state.username, this.state.password)

    }
  }


  render() {
    return (
      <form onSubmit={this.callbackFunction}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUsername} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePassword} value={this.state.password}/>
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
