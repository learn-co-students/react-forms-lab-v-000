import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  changeState = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    if(this.state.username !== "" && this.state.password !== "") {
      this.props.onSubmit(this.state.username, this.state.password)
    } else {
      alert("Please fill out both fields")
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
              value={this.state.username} onChange={this.changeState}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
              value={this.state.password} onChange={this.changeState}/>
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
