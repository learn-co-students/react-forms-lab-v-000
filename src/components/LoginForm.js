import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value
    }, () => console.log(this.state.username))
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  submit = (e) => {
    e.preventDefault()
    if ((this.state.username !== "") && (this.state.password !== "")) {
      this.props.onSubmit(this.state.username, this.state.password)
    }
  }

  render() {
    return (
      <form onSubmit={(e) => this.submit(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={(e) => this.handleUsername(e)}></input>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={(e) => this.handlePassword(e)}></input>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
