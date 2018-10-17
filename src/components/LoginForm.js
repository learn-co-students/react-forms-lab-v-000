import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value:''
    };
  }

    handleUserNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event=> {
    event.preventDefault();
    const username = this.state.username
    const password = this.state.password
    if (username || password) return
    alert('Usersubmitted: ' + this.state.value);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.value}
     onChange={this.handleUserNameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.value}
     onChange={this.handlePasswordChange} />
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
