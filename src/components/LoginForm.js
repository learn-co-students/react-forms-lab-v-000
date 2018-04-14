import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
    text: "",
    password: ""
  }
}

input = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({[name]: value});
}

  onSubmit = (event) => {
  event.preventDefault();
  if (this.state.username && this.state.password !== "") {
    this.props.onSubmit({username: this.state.usernameText, password: this.state.passwordText})
  } else {
    alert("Need to submit a Username and Password")
  }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.input}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.input}/>
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
