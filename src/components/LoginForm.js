import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }



  handleUsername = event => {
    this.setState({
      username: event.target.value
        })
  }

  handlePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
        this.props.handleLogin();
    }
    let formData = { username: this.state.username, password: this.state.password}
    console.log(formData)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleUsername(event)} value={this.state.value}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event =>this.handlePassword(event)} value={this.state.value}/>
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
