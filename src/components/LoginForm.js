import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  updateLogin = (event) => {
    this.setState({
      username: event.target.value,
      password: event.target.value
    })
    console.log()
  }

  render() {
    return (
      <form onSubmit={ event => this.updateLogin(event) } >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"/>
          </label>
        </div>
      </form>
    );
  }
}

export default LoginForm;
