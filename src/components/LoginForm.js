// This component takes one prop: handleLogin which is a function — this function is called 
// when the form is being submitted. By default, this function currently just includes 
// console.log. That will allow you to see if the form is functioning correctly when working 
// in your browser.

// You'll find two inputs in this component: <input type="text"> and <input type="password">. 
// Make this a controlled component by adding the necessary attributes to these inputs. 
// The input values should be saved to the component's state on every change.
// Remember that you can retrieve the input name and value of an event.target from the JS event.
// Add the necessary event handler to the <form> element in order to call the onSubmit callback prop.
// The onSubmit callback prop should only be called if both fields are filled in (with any value).
// Note: In the starter code are id attributes - these are used in the tests, so make sure to leave 
// them as they are.

// Tests passed:
// LoginForm
//     Saving input values in state
//       ✓ should save the username in state when the input changes
//       ✓ should save the password in state when the input changes
//     Calling `handleLogin` callback prop
//       ✓ should call the prevent the default action when the form is being submitted 
//       ✓ should not call the `handleLogin` callback prop when the username and/or password fields are empty
//       ✓ should call the `handleLogin` callback prop when the form is being submitted

import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} />
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