import React from 'react';
// This component takes one prop: onSubmit which is a function — this function is called when the form is being submitted.By default, this function is currently just includes console.log that will allow you to see if the form is functioning correctly when working in your browser.
// You'll find two inputs in this component: <input type="text"> and <input type="password">. Make this a controlled component by adding the necessary attributes to these inputs. The input values should be saved to the component's state, again on every change.

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.username || !this.state.password) {
      return
    }
  }

  usernameInput = (event) => {
    this.setState({
      ...this.state,
      username: event.target.value
    })
    console.log(this.state.username);
  }

  passwordInput = (event) => {
    this.setState({
      ...this.state,
      password: event.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" type="text" value={this.state.username} onChange={this.usernameInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" type="password" value={this.state.password} onChange={this.passwordInput} />
          </label>
        </div>
        <div>
          <button type="onSubmit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;