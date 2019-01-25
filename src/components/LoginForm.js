import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "username",
      password: "password"

    };
  }

  handleLogin = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })

  }

handleSubmit = (event)=>{
  event.preventDefault()
  let username = this.state.username
  let password = this.state.password
  if(username !== "" && password !== ""){

    this.props.onSubmit({username: username, password: password})
  }
}



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleLogin} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleLogin} />
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
